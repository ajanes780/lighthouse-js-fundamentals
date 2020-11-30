
var num = 60;
while (num >=0){
if (num === 50){
  console.log("Orbiter transfers from ground to internal power");
}
if (num === 31){
  console.log("Ground launch sequencer is go for auto sequence start");
}

 if (num === 16 ){
   console.log("Activate launch pad sound suppression system")
 }
if (num === 10){
  console.log("Activate main engine hydrogen burnoff system")
}
if (num === 6){
  console.log("Main engine start")
}
if (num === 0){
  console.log("Solid rocket booster ignition and liftoff! ")
}
else {
  console.log("t-minus "+num +" secounds.")
}
 

  num = num -1;

}
