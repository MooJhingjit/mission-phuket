const { Users } = require('@model');
const { to, TE }  = require('@service/util.service');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt')

const signup = async function(user, options = null){
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
};
module.exports.signup = signup;
