const express = require('express')
const router = express.Router()
const { Users } = require('@controller')



router.get('/user/profile', function(req, res){
  Users.profile(req, res)
})

router.post('/login', function(req, res){
  Users.login(req, res)
})

router.post('/signup', function(req, res){
  Users.signup(req, res)
})

router.get('/users', function(req, res){
  Users.list(req, res)
})

router.post('/users', function(req, res){
  Users.create(req, res)
})

router.put('/users/:id', function(req, res){
  Users.update(req, res)
})

router.delete('/users', function(req, res){
  Users.remove(req, res)
})

module.exports = router