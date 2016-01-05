var Gopigo = require('node-gopigo').Gopigo
var Commands = Gopigo.commands
var Robot = Gopigo.robot
var robot

var ultrasonicPin = 15
//var irreceiverPin = 8

var rl = readline.createInterface({
  input : process.stdin,
  output: process.stdout
});

robot = new Robot({
  minVoltage: 5.5,
  criticalVoltage: 1.2,
  debug: true,
  ultrasonicSensorPin: ultrasonicPin,
  //IRReceiverSensorPin: irreceiverPin
})
robot.on('init', function onInit(res) {
  if (res) {
    console.log('GoPiGo Ready!')
  } else {
    console.log('Something went wrong during the init.')
  }
})
robot.on('error', function onError(err) {
  console.log('Something went wrong')
  console.log(err)
})
robot.on('free', function onFree() {
  console.log('GoPiGo is free to go')
})
robot.on('halt', function onHalt() {
  console.log('GoPiGo is halted')
})
robot.on('close', function onClose() {
  console.log('GoPiGo is going to sleep')
})
robot.on('reset', function onReset() {
  console.log('GoPiGo is resetting')
})
robot.on('normalVoltage', function onNormalVoltage(voltage) {
  console.log('Voltage is ok ['+voltage+']')
})
robot.on('lowVoltage', function onLowVoltage(voltage) {
  console.log('(!!) Voltage is low ['+voltage+']')
})
robot.on('criticalVoltage', function onCriticalVoltage(voltage) {
  console.log('(!!!) Voltage is critical ['+voltage+']')
})
robot.init()
robot.board.wait(1000)

module.exports = {
    highSpeed: function(){
        var res = robot.motion.setSpeed(255);
        console.log("Set speed to 255::" + res);      
    },
    lowSpeed: function(data){
        var res = robot.motion.setSpeed(100);
        console.log("Set speed to 100::" + res);
    },
    stop: function(data){
        var res = robot.motion.stop()
        console.log("Stopping::" + res);
    },
    moveForward: function(data){
        var res = robot.motion.backward(false)
        console.log('Moving forward::' + res)
    },
    moveBackward: function(data){
        var res = robot.motion.forward(false)
        console.log('Moving backward::' + res)
    },
    moveLeft: function(data){
        var res = robot.motion.left()
        console.log('Turning left::' + res)
    },
    rotateLeft: function(data){
        var res = robot.motion.leftWithRotation()
        console.log('Rotating left::' + res)
    },
    moveRight: function(data){
        var res = robot.motion.right()
        console.log('Turning right::' + res)
    },
    rotateRight: function(data){
        var res = robot.motion.rightWithRotation()
        console.log('Rotating right::' + res)
    }
};
