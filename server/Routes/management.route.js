const express = require('express')
const router = express.Router()
const { Management } = require('@controller')

router.get('/management/:id', function(req, res){
  Management.get(req, res)
})

router.post('/management', function(req, res){
  Management.create(req, res)
})

router.put('/management/:id', function(req, res){
  Management.update(req, res)
})

router.delete('/management', function(req, res){
  Management.remove(req, res)
})

module.exports = router