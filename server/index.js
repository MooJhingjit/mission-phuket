require('module-alias/register');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mission_phuket', { useNewUrlParser: true });

const verifyToken = require('./Middlewares/verifyToken');
// app.use('/static', express.static('Public'))
app.all('*', verifyToken, function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', ['Content-Type', 'cache-control', 'x-requested-with', 'Authorization']);
  next();
});

app.use(require('./Routes'));
app.get('/checking', function(req, res){
  res.json({
     "Server": "Welcome to Phuket mission server"
  });
});

//listen for requests
const port = process.env.PORT || 3000
let server = app.listen(port, function(){
    console.log(`now listenting on port ${port}...`);
})

