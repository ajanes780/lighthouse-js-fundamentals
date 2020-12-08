facebookProfile ={
    name : "Aaron",
    friends: 500,
    messages:["dont stop", "go fast ","keep learning"],
    postMessage:function (messages){
      facebookProfile.messages.push(messages)
    } ,
    deleteMessage: function(index) {
     facebookProfile.messages.splice(index, 1);
      
   },
   addFriend:function(number) {
    facebookProfile.friends = facebookProfile.friends + number
   },
  
  removeFriend: function(number){
    facebookProfile.friends = facebookProfile.friends - number
  },
  
    
}


facebookProfile.addFriend(500)
console.log(facebookProfile.friends)
facebookProfile.removeFriend(999)
console.log(facebookProfile.friends)