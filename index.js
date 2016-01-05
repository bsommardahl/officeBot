var app = require('express')();
var http = require('http').Server(app);
var robot = require('./robot');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.post('/stop', function(req,res){
  robot.stop();
  console.log("stop");
  res.json({"status": "ok"});
});

app.post('/rightRotate', function(req,res){
  robot.rotateRight();
  console.log("rotate right");
  res.json({"status": "ok"});
});

app.post('/right', function(req,res){
  robot.moveRight();
  console.log("right");
  res.json({"status": "ok"});
});

app.post('/lowSpeed', function(req,res){
  robot.lowSpeed();
  console.log("slow");
  res.json({"status": "ok"});
});

app.post('/highSpeed', function(req,res){
  robot.highSpeed();
  console.log("fast");
  res.json({"status": "ok"});
});

app.post('/leftRotate', function(req,res){
  robot.rotateLeft();
  console.log("rotate left");
  res.json({"status": "ok"});
});

app.post('/left', function(req,res){
  robot.moveLeft();
  console.log("left");
  res.json({"status": "ok"});
});

app.post('/forward', function(req,res){
  robot.moveForward();
  console.log("forward");
  res.json({"status": "ok"});
});

app.post('/backward', function(req,res){
  robot.moveBackward();
  console.log("backward");
  res.json({"status": "ok"});
});

var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log('listening on *:'+port);
});