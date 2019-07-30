const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { to, TE }  = require('@service/util.service');

const reportSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  programType: { type: String, required: true},
  incidentDate: { type: Date, required: true},
  hn: { type: String, required: false},
  name: { type: String, required: false},
  age: { type: Number, required: false},
  reportDate: { type: Date, required: true},
  reporter: { type: String, required: true},
  area: { type: String, required: true},
  affectedPerson: { type: String, required: true},
  program: {
    type: Object, required: false
    // common:{
    //   review: null,
    //   PCT: null,
    //   IC: null,
    //   PTC: null,
    //   operation: null
    // },
    // spacific: {
    //   gynecology: null,
    //   surgery: null,
    //   medicine: null,
    //   pediatrics: null,
    //   orthopedic: null,
    //   generalEnt: null,
    //   optic: null,
    //   anesthesiology: null,
    //   radiology: null,
    //   dental: null
    // },
    // event: {
    //   event: null
    // },
    // env: null,
    // facilities: null,
    // im: null,
    // hrd: null,
    // budget: null,
    // rights: null 
  },
  violence: {
    type: Object, required: false
    // clinical: null, general: null
  },
  eventBriefing: { type: String, required: true},
  causeAnalysis: { type: String, required: true},
  comment: { type: String, required: false},
  note: { type: String, required: false},
  status: { type: String, required: true},
  createdByDepartment: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'department'},
  updatedBy: {type: String, required: false},
  createdBy: {type: String, required: false},
},
{
    timestamps: true
});

// reportSchema.statics.findByUsername = async function (username) {
//   let [err, user] = await to(this.find({ username: new RegExp(username, 'i') }));
//   if(err) TE(err.message);
//   return user;
// }

// reportSchema.query.byUsername = async function(username) {
//   let [err, user] = await to(this.where({ username: new RegExp(username, 'i') }));
//   if(err) TE(err.message);
//   return user;
// };

module.exports = mongoose.model('Reports', reportSchema);