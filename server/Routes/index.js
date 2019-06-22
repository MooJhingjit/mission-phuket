const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', 
  [
    // require('./auth'),
    require('./user.route'),
    require('./department.route'),
    require('./report.route')
  ]
);

module.exports = app;