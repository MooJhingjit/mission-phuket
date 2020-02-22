const { Reports, Answer, Management, Departments } = require('@model');
const { to, TE }  = require('@service/util.service');
const mongoose = require('mongoose');
const { trans, reportConfig } = require('../Config')

module.exports = {
  async list() {
    let [err, reports] = await to(Reports.find());
    if(err) TE(err.message);
    return reports
  },
  async getDataTable (obj, user) {
    let err, reports, total;
    let condition,result = {};
    let perpage = (!obj.perPage) ? 0 : obj.perPage;
    let sort = { reportDate: 'desc'}
    sort = await this.sortDataTable(obj.sort);
    condition = await this.getCondtions(obj, user);
    // console.log(condition);
    [err, total] = await to(Reports.find(condition).countDocuments());
    [err, reports] = await to(Reports.find(condition).sort(sort).limit(perpage).skip(obj.from));
    if(err) TE(err.message);
    result.total = total
    result.data = reports.map(item => {
      let createdByDepartment = JSON.parse(JSON.stringify(item.createdByDepartment));
      let myDepartment = JSON.parse(JSON.stringify(user.departmentId));
      if (createdByDepartment !== myDepartment) {        
        item.reporter = '';
        item.updatedBy = '';
        item.createdBy = '';
        item.createdByDepartment = null;
      }
      return item  // hide reporter
    })
    return result
  },
  async sortDataTable (sortObj) {
    let sort = {};
    if (sortObj) {
      let sortArr = sortObj.split(',')
      sortArr.forEach(sortItem => {
        let str = sortItem.split('|')
        sort[str[0]] = str[1]
      })
    }
    return sort;
  },
  async getFullReport (obj, user) {
    let err, reports, total;
    let condition = {};
    let sort = { createdAt: 'asc'}
    sort = await this.sortDataTable(obj.sort);
    condition = await this.getCondtions(obj, user);
    // console.log(condition);
    [err, reports] = await to(Reports.find(condition).sort(sort))
    if(err) TE(err.message);
    reports = await Promise.all(
      reports.map( async (item) => {
      item = item.toJSON();
      // console.log(item.status);
      item.program = this.getProgramValueForReport(item.programType, item.program)
      
      item.responsibilities = await this.getResponsibilitiesReport(item._id)
      item.status = trans.status[item.status]
      return item
    }))
    return reports
  },
  getProgramValueForReport (programType, programObj) {
    if (programType === 'non-clinical') programType = 'nonClinical'
    let programKeys = Object.keys(reportConfig[programType])
    let programValue = [];
    // console.log(programKeys); // [ 'env', 'facilities', 'im', 'hrd', 'budget', 'rights' ]
    for (let programKey of programKeys) {
      let programGroup = programObj[programKey]
      // console.log(programGroup);
      if (programType === 'nonClinical') { // this case there is no child
        if (programGroup !== null) {
          let retrunKey = reportConfig[programType][programKey].title;
          let returnValue = [];
          returnValue = reportConfig[programType][programKey].options.find((x) => {
            // if (x.child && x.child.length) return x.child
            return x.value === programGroup;
          }).title
          programValue.push({
            key: retrunKey,
            value: returnValue
          })
        }
      } else {
        // console.log(programGroup);
        Object.keys(programGroup).forEach(itemKey => {
          if (programGroup[itemKey] !== null) {
            // console.log(programGroup[itemKey]);
            let retrunKey = reportConfig[programType][programKey][itemKey].title;
            let returnValue = null;
            // console.log(reportConfig[programType][programKey][itemKey]);
            returnValue = reportConfig[programType][programKey][itemKey].options.find((x) => {
              // if (x.child && x.child.length) return x.child
              return x.value === programGroup[itemKey];
            })
            if (!returnValue) {
              reportConfig[programType][programKey][itemKey].options.filter((item) => {
                return item.child && item.child.length
              }).map((item) => {
                item.child.find(x => {
                  if (x.value === programGroup[itemKey]) {
                    returnValue = x.title
                  }
                })
              })
            }
            else returnValue = returnValue.title
            programValue.push({
              key: retrunKey,
              value: returnValue
            })
          }
        })
      }
    }
    return programValue
  },
  async getResponsibilitiesReport (reportId) {
    let management = await Management.find({reportId})
    let responsibilities = await Promise.all(
      management.map( async (item) => {
        let department = await Departments.findById(item.departmentId)
        let answers = await Answer.find({reportId, departmentId: item.departmentId})
        return {
          department,
          answers
        }
      })
    )
    // console.log(responsibilities);
    return responsibilities;
  },
  async getCondtions (obj, user) {
    let condition = {};
    condition.$and = [];
    if (!user.isAdmin || (user.isAdmin && obj.searchDetail.department !== 'all')) {
      let reportIdArr = obj.reportAssociated.map((item) => {
        return item.reportId;
      })
      if (!user.isAdmin && obj.searchDetail.reportAssociated === 'waitForAnswer') {
        reportIdArr = await Promise.all(
          reportIdArr.map(async (item) => {
            let [err, total] = await to(Answer.find({reportId: item, departmentId: user.departmentId}).countDocuments());
            // console.log(total);
            return (total) ? null : item;
          })
        )
        condition.$and.push(
          { $and: [{_id: { $in: reportIdArr } }] }
        )
      } else {
        let subConditions = [{_id: { $in: reportIdArr } }]
        if (user.isAdmin) {
          subConditions.push({createdByDepartment: [obj.searchDetail.department]})
        } else {
          subConditions.push({createdByDepartment: [...user.childDepartments, user.departmentId]})
        }
        condition.$and.push(
          { $or: subConditions }
        )
      }
    }
    
    if (obj.searchDetail.reportStatus && obj.searchDetail.reportStatus !== 'all') {
      condition.status = obj.searchDetail.reportStatus
    }

    if (obj.searchDetail.reportType && obj.searchDetail.reportType !== 'all') {
      condition.programType = obj.searchDetail.reportType
    }

    if (obj.searchDetail.mainSearch) {
      let regex = new RegExp(obj.searchDetail.mainSearch, 'i')
      condition.$and.push(
        // { $or: [{name: regex }, {reporter: regex}] }
        { $or: [{name: regex }] }
      )
    }
    if (obj.searchDetail.reportStatus) {

    }

    if (obj.searchDetail.incidentDateEnd || obj.searchDetail.incidentDateStart) {
      let conditionDate = [];
      if (obj.searchDetail.incidentDateStart) {
        conditionDate.push({incidentDate: { $gte: obj.searchDetail.incidentDateStart} });
      } 
      if (obj.searchDetail.incidentDateEnd) {
        conditionDate.push({incidentDate: { $lte: obj.searchDetail.incidentDateEnd} });
      }
      condition.$and.push(
        {
          $and: conditionDate
        }
      )
    }
    if (!condition.$and.length) { // empty
      delete condition.$and;
    }
    return condition;
  },
  async get (reportId){
    return Reports.findById(reportId).then((report, err) => {
      if(err) TE(err.message);
      return report
    })
  },
  async create(report, options = null){
    let newReport = new Reports({
      _id: new  mongoose.Types.ObjectId(),
      ...report,
      status: 'reportCreated',
      updatedBy: options.user.name,
      createdBy: options.user.name
    })
    return newReport.save().then((newReport, err) => {
      if(err) TE(err.message);
      return newReport
    })
  },
  async update(report, options = null) {
    let field = {};
    if (options.type === 'update') {
      field = {
        programType: report.programType,
        incidentDate: report.incidentDate,
        hn: report.hn,
        name: report.name,
        age: report.age,
        reportDate: report.reportDate,
        reporter: report.reporter,
        area: report.area,
        affectedPerson: report.affectedPerson,
        program: report.program,
        violence: report.violence,
        eventBriefing: report.eventBriefing,
        causeAnalysis: report.causeAnalysis,
        comment: report.comment,
        note: report.note,
        updatedBy: options.user.name
      };
    } else if (options.type === 'updateStatus') {
      field = {
        status: report.status
      };
    }
    // console.log(field);
    let [err, res] = await to(Reports.findByIdAndUpdate(report.id, field));
    if(err) TE(err.message);
    return res
  },
  async remove(report) {
    let [err, res] = await to(Reports.findOneAndDelete({_id: report.id}));
    if(err) TE(err.message);
    return res
  },
}
// const get = async function(user){
//   return Users.findById(user._id).select("-password").then((user, err) => {
//     if(err) TE(err.message);
//     return user
//   })
// };

// const signup = async function(user, options = null){
//   let err, res, hashPassword;
//   [err, hashPassword] = await to(bcrypt.hash(user.password, 10));
  
//   if(err) TE(err.message);
//   // console.log(hashPassword);
//   let newUser = new Users({
//     _id: new  mongoose.Types.ObjectId(),
//     name: user.name,
//     username: user.username,
//     password: hashPassword,
//     department: user.department
//   })
//   return newUser.save().then((newUser, err) => {
//     // console.log(err);
//     if(err) TE(err.message);
//     return newUser
//   })
// };
// module.exports.signup = signup;
// module.exports.get = get;
