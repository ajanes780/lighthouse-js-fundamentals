
function buildTriangle(length) {
  let triangle=""
  let lineNumber = 1
  for(lineNumber=1; lineNumber<=length; lineNumber++){
    // We will not print one line at a time.
    // Rather, we will make a huge string that will comprise the whole triangle
    triangle = triangle + makeLine(lineNumber);
}
return triangle;


function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
  
}

console.log(buildTriangle(10));
