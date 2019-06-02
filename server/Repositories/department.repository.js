const { Departments } = require('@model');
const { to, TE }  = require('@service/util.service');
const mongoose = require('mongoose');

const create = async function(department, options = null){
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
};
module.exports.create = create;
