let theArray3 = [];
let theArray2 = [];
let theArray1 = [];

function concat(theArray1, theArray2) {
  var theArray3 = [ ];
  theArray3 = theArray1.concat(theArray2);
  return theArray3;
}
let totalNum = theArray1.length + theArray2.length;
  for (var i = totalNum; i > theArray2.length; i++) {
    

    theArray3.concat(i);
  }
  














console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);