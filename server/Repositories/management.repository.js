const { Management } = require('@model');
const { to, TE }  = require('@service/util.service');
const mongoose = require('mongoose');

module.exports = {
  // async list() {
  //   let [err, reports] = await to(Reports.find());
  //   if(err) TE(err.message);
  //   return reports
  // },
  async get (reportId){
    return Management.find({reportId}).then((management, err) => {
      if(err) TE(err.message);
      return management
    })
  },
  async create(data, options = null){
    // console.log(data);
    let newDepartment = new Management({
      _id: new  mongoose.Types.ObjectId(),
      departmentId: data.departmentId,
      reportId: data.reportId,
      updatedBy: options.user.name,
      createdBy: options.user.name
    })
    return newDepartment.save().then((newDepartment, err) => {
      if(err) TE(err.message);
      return newDepartment
    })
  },
  // async update(report, options = null) {
  //   console.log(report);
  //   let newReport = {
  //     programType: report.programType,
  //     incidentDate: report.incidentDate,
  //     hn: report.hn,
  //     name: report.name,
  //     age: report.age,
  //     reportDate: report.reportDate,
  //     reporter: report.reporter,
  //     area: report.area,
  //     affectedPerson: report.affectedPerson,
  //     program: report.program,
  //     violence: report.violence,
  //     eventBriefing: report.eventBriefing,
  //     causeAnalysis: report.causeAnalysis,
  //     comment: report.comment,
  //     note: report.note,
  //     updatedBy: options.user.name
  //   };
  //   let [err, res] = await to(Reports.findByIdAndUpdate(report.id, newReport));
  //   if(err) TE(err.message);
  //   return res
  // },
  async remove(data) {
    // console.log(data);
    let [err, res] = await to(Management.findOneAndDelete({...data}));
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
