var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var messages = [];

app.get('/',function(req,res,next) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
  console.log('message request');
});

app.post('/',function(req,res,next) {

  messages.push({
    message: req.body.message,
    time: new Date()
  });

    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
  console.log('new message');
});

app.options('/', function(req, res, next){
  res.set({
    'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }).send();
});

app.listen(8989);
