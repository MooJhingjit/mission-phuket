const { Departments } = require('@model');
const { to, TE }  = require('@service/util.service');
const mongoose = require('mongoose');

module.exports = {
  async list() {
    let [err, department] = await to(Departments.find());
    if(err) TE(err.message);
    return department
  },
  async get (departmentId){
    return Departments.findById(departmentId).then((department, err) => {
      if(err) TE(err.message);
      return department
    })
  },
  create(department, options = null){
    let err, res;
    let newDepartments = new Departments({
      _id: new  mongoose.Types.ObjectId(),
      name: department.name,
      manager: department.manager,
      createdBy: options.user.name
    })
    return newDepartments.save().then((newDepartments, err) => {
      if(err) TE(err.message);
      return newDepartments
    })
  },
  async update(department, options = null) {
    let newDepartments = {
      name: department.name,
      manager: department.manager,
      updatedBy: options.user.name
    };
    let [err, res] = await to(Departments.findByIdAndUpdate(department.id, newDepartments));
    if(err) TE(err.message);
    return res
  },
  async remove(department) {
    let [err, res] = await to(Departments.findOneAndDelete({_id: department.id}));
    if(err) TE(err.message);
    return res
  },
};

// const create = async function(department, options = null){
//   let err, res;
//   let newDepartments = new Departments({
//     _id: new  mongoose.Types.ObjectId(),
//     name: department.name,
//     manager: department.manager,
//     createdBy: options.user.name
//   })
//   return newDepartments.save().then((newDepartments, err) => {
//     if(err) TE(err.message);
//     return newDepartments
//   })
// };
// module.exports.create = create;
