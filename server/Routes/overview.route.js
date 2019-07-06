const express = require('express')
const router = express.Router()
const { Reports } = require('@controller')

router.get('/overview/:id', function(req, res){
  Reports.getOverview(req, res)
})

module.exports = router