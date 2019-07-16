const { Users } = require('@model');
const { to, TE }  = require('@service/util.service');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt')
module.exports = {
  async get (user){
    return Users.findById(user._id).select("-password").then((user, err) => {
      if(err) TE(err.message);
      return user
    })
  },
  async signup (user, options = null) {
    let err, res, hashPassword;
    [err, hashPassword] = await to(bcrypt.hash(user.password, 10));
    
    if(err) TE(err.message);
    // console.log(hashPassword);
    let newUser = new Users({
      _id: new  mongoose.Types.ObjectId(),
      name: user.name,
      username: user.username,
      password: hashPassword,
      department: user.department
    })
    return newUser.save().then((newUser, err) => {
      // console.log(err);
      if(err) TE(err.message);
      return newUser
    })
  },
  async list() {
    let [err, user] = await to(Users.find());
    if(err) TE(err.message);
    return user
  },
  async create(user, options = null){
    // console.log(user);
    let hashPassword;
    [err, hashPassword] = await to(bcrypt.hash(user.password, 10));
    let newUser = new Users({
      _id: new  mongoose.Types.ObjectId(),
      name: user.name,
      username: user.username,
      department: user.departmentId,
      password: hashPassword,
      updatedBy: options.user.name,
      createdBy: options.user.name
    })
    return newUser.save().then((newUser, err) => {
      if(err) TE(err.message);
      return newUser
    })
  },
  async update(user, options = null) {
    
    let newUser = {
      name: user.name,
      username: user.username,
      department: user.departmentId,
      updatedBy: options.user.name
    };
    if (user.newPassword) {
      let [err, hashPassword] = await to(bcrypt.hash(user.newPassword, 10));
      newUser.password = hashPassword
    }
    let [err, res] = await to(Users.findByIdAndUpdate(user.id, newUser));
    if(err) TE(err.message);
    return res
  },
  async remove(user) {
    let [err, res] = await to(Users.findOneAndDelete({_id: user.id}));
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
