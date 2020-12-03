
var sound =""
var laugh = function(max) {
    for(var i =0 ; i< max; i++){
        sound = sound+"ha"
    }
    sound= sound+ "!"
    return sound
        
}

console.log(laugh(5));