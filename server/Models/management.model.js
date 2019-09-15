const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { to, TE }  = require('@service/util.service');

const managementSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  reportId: {type: mongoose.Schema.Types.ObjectId, required: false, ref: 'report'},
  departmentId: {type: mongoose.Schema.Types.ObjectId, required: false, ref: 'department'},
  updatedBy: {type: String, required: false},
  createdBy: {type: String, required: false},
},
{
    timestamps: true
});

managementSchema.statics.findByDepartments = async function (data) {
  let [err, management] = await to(this.find({ departmentId: { $in : data.departmentIds } }));
  if(err) TE(err.message);
  return management;
}

// managementSchema.statics.findByUsername = async function (username) {
//   let [err, user] = await to(this.find({ username: new RegExp(username, 'i') }));
//   if(err) TE(err.message);
//   return user;
// }

// managementSchema.query.byUsername = async function(username) {
//   let [err, user] = await to(this.where({ username: new RegExp(username, 'i') }));
//   if(err) TE(err.message);
//   return user;
// };

module.exports = mongoose.model('Management', managementSchema);