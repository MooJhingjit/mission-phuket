const express = require('express')
const router = express.Router()
const { Answer } = require('@controller')

router.get('/answers/:id', function(req, res){
  Answer.get(req, res)
})

router.post('/answers', function(req, res){
  Answer.create(req, res)
})

router.put('/answers/:id', function(req, res){
  Answer.update(req, res)
})

router.delete('/answers', function(req, res){
  Answer.remove(req, res)
})

module.exports = router