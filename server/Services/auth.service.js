const { Users } = require('@model');
const { to, TE } = require('@service/util.service');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authUser = async function(user){
  let username = user.username;
  let password = user.password;
  let err, comparison;
  [err, user] = await to(Users.findOne().byUsername(username));
  
  if(err) TE(err.message);
  
  if(!user) TE('noUserFound');
  
  [err, isCorrect] = await to(bcrypt.compare(password, user.password));
  // console.log(isCorrect);
  if(err) TE(err.message);
  
  if(!isCorrect) TE('passwordNotMatch');

  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      username: user.username,
    },
    'MissionPhuket',
    {
      expiresIn: '12h'
    }
  );
};

module.exports.authUser = authUser;