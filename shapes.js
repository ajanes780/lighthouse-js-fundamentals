 function calculateRectangleArea(length, width) {
    x = length * width ;
    if (x <= 0){
      return undefined
    }

    return x 
 }

function calculateTriangleArea(base, height){
  y = base * height /2 ;
  if(y <= 0){
    return undefined;
  } 
  return y ;
}

function calculateCircleArea(radius){
  z =  Math.PI * Math.pow(radius,2);
  if (radius <= 0){
    return undefined;
  }
  return z ;
}

var inventory = [
  ["gold pieces", 25],
  ["belt", 4],
  ["ring", 1],
  ["shoes", 2]
];
console.log(inventory.length);


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-50)); // should print undefined
