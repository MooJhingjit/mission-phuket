const express = require('express')
const router = express.Router()
const { Departments } = require('@controller')

router.post('/department', function(req, res){
  Departments.create(req, res)
})

module.exports = router