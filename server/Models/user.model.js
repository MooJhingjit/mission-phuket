const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { to, TE }  = require('@service/util.service');

const userSchema = new Schema({
   _id: mongoose.Schema.Types.ObjectId,
   name: {type: String, required: true},
   username: {type: String, required: true},
   department: {type: mongoose.Schema.Types.ObjectId, required: false, ref: 'department'},
   password: {type: String, required: true},
   updatedBy: {type: String, required: false},
   createdBy: {type: String, required: false},
},
{
    timestamps: true
});

userSchema.statics.findByUsername = async function (username) {
  let [err, user] = await to(this.find({ username: new RegExp(username, 'i') }));
  if(err) TE(err.message);
  return user;
}

userSchema.query.byUsername = async function(username) {
  let [err, user] = await to(this.where({ username }));
  if(err) TE(err.message);
  return user;
};

module.exports = mongoose.model('User', userSchema);