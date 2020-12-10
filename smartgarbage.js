
const bins = {

  recycling: 0 ,
  waste : 0 ,
  compost: 0 
  
};

function smartGarbage(trash, bins){
  const keys = Object.keys(bins);


  if (keys.includes("recycling")) {
    bins.recycling += 1;
     
  }
  else if ( keys === "waste") {
    bins.waste += 1;
  }

else if ( keys === "compost"){
  bins.compost += 1;
}
else {
  return " Not a Valid Input ";
}
  return (bins);
}



console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
