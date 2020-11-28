const raining = false;
const cold = true;
const tired = true;
const temperature = -1;


if (raining) {
  console.log("Don't forget your umbrella!");
}
  else{
    console.log("maybe some sunglasses ")
  }

if (cold) {
  console.log("Make sure you pick out a scarf!");
}
if (tired) {
    console.log("Get more sleep !");
}
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}