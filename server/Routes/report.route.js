const express = require('express')
const router = express.Router()
const { Reports } = require('@controller')


router.get('/reports', function(req, res){
  Reports.list(req, res)
})

router.get('/reports/:id', function(req, res){
  Reports.get(req, res)
})

router.post('/reports', function(req, res){
  Reports.create(req, res)
})

// router.post('/signup', function(req, res){
//   Users.signup(req, res)
// })

// router.get('/users', function(req, res){
//   Users.list(req, res)
// })

// router.post('/users', function(req, res){
//   Users.create(req, res)
// })

router.put('/reports/:id', function(req, res){
  Reports.update(req, res)
})

// router.delete('/users', function(req, res){
//   Users.remove(req, res)
// })

module.exports = router