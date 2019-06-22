const express = require('express')
const router = express.Router()
const { Departments } = require('@controller')

router.get('/department', function(req, res){
  Departments.list(req, res)
})

router.post('/department', function(req, res){
  Departments.create(req, res)
})

router.put('/department/:id', function(req, res){
  Departments.update(req, res)
})

router.delete('/department', function(req, res){
  Departments.remove(req, res)
})

module.exports = router