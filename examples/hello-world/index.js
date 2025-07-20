'use strict'

var express = require('express'); 

var app = module.exports = express();

app.get('/', function(req, res){
  res.send('Hello World from version 6 ');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(8080);
  console.log('Express started on port 8080');
  console.log('Hello good morning');
}
