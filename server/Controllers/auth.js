
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../Models/user')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  User.findOne({username: req.body.data.username})
  .exec()
  .then(function(user) {
     bcrypt.compare(req.body.data.password, user.password, async function(err, result){
        if(err) {
           return res.status(401).json({
              failed: 'Unauthorized Access'
           })
        }
        if(result) {
          let jwtObj = {
            user: {
              _id: user._id,
              name: user.name,
              username: user.username,
            }
          }
          const JWTToken = jwt.sign(
          jwtObj.user,
          'MissingPhuket',
          {
            expiresIn: '12h'
          })
          req.userId = user._id
          return res.status(200).json({token: JWTToken})
        }
        return res.status(401).json({
           failed: 'Unauthorized Access'
        })
     })
  })
  .catch(error => {
     res.status(500).json({
        error: error
     })
  })
}

module.exports.login = login