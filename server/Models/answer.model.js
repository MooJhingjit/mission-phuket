const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { to, TE }  = require('@service/util.service');

const answerSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  reportId: {type: mongoose.Schema.Types.ObjectId, required: false, ref: 'report'},
  departmentId: {type: mongoose.Schema.Types.ObjectId, required: false, ref: 'department'},
  cause: {type: String, required: true},
  prevention: {type: String, required: true},
  responsible: {type: String, required: true},
  updatedBy: {type: String, required: false},
  createdBy: {type: String, required: false},
},
{
    timestamps: true
});

// answerSchema.statics.findByUsername = async function (username) {
//   let [err, user] = await to(this.find({ username: new RegExp(username, 'i') }));
//   if(err) TE(err.message);
//   return user;
// }

// answerSchema.query.byUsername = async function(username) {
//   let [err, user] = await to(this.where({ username: new RegExp(username, 'i') }));
//   if(err) TE(err.message);
//   return user;
// };

module.exports = mongoose.model('Answer', answerSchema);