const { Reports } = require('@model');
const { to, TE }  = require('@service/util.service');
const mongoose = require('mongoose');

module.exports = {
  async list() {
    let [err, reports] = await to(Reports.find());
    if(err) TE(err.message);
    return reports
  },
  async getDataTable (obj) {
    let err, reports, total;
    let condition,result = {};
    let perpage = (!obj.perPage) ? 0 : obj.perPage;
    let sort = { createdAt: 'asc'}
    sort = await this.sortDataTable(obj.sort);
    condition = await this.setConditionDataTable(obj);

    [err, reports] = await to(Reports.find(condition).sort(sort).limit(perpage).skip(obj.from));
    if(err) TE(err.message);
    result.total = await Reports.find(condition).countDocuments()
    result.data = reports
    
    // console.log(reports);
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
  async setConditionDataTable (obj) {
    let condition = {};
    
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
      updatedBy: options.user.name,
      createdBy: options.user.name
    })
    return newReport.save().then((newReport, err) => {
      if(err) TE(err.message);
      return newReport
    })
  },
  async update(report, options = null) {
    let newReport = {
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
    let [err, res] = await to(Reports.findByIdAndUpdate(report.id, newReport));
    if(err) TE(err.message);
    return res
  },
  // async remove(user) {
  //   let [err, res] = await to(Users.findOneAndDelete({_id: user.id}));
  //   if(err) TE(err.message);
  //   return res
  // },
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
