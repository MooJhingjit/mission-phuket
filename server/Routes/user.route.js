const express = require('express')
const router = express.Router()
const { Users } = require('@controller')


router.post('/login', function(req, res){
  Users.login(req, res)
})

router.post('/signup', function(req, res){
  Users.signup(req, res)
})

module.exports = router