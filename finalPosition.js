const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
 
function finalPosition(moves){
  let cordinates = []
  let x = 0;
  let y = 0;
  for(const move of moves){
    if (move === "north"){
      y= y + 1;
    }
    if (move === "south"){
      y= y - 1;
    }
    if (move === "west"){
      x = x-1;
    }
    if (move === "east"){
      x = x + 1;
    }

    cordinates[0]= x;
    cordinates[1]= y;
  }
   return cordinates
   
}
console.log(finalPosition(moves))




finalPosition(moves);
