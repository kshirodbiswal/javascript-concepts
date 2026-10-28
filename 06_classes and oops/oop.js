//object literal- collection of prop. and method
const user={
    username:"raja",
    loginCount:8,
    signedIn:"true",

    getUserDetails :  function(){
    //  console.log("get user details from database");
    console.log(`username:${this.username}`);
   console.log(this); 
  }
}

//  console.log(user.getUserDetails());


//constructor function
function nUser(username, loginCount, signedIn){
  this.username=username
  this.loginCount=loginCount
  this.signedIn=signedIn
  this.greetings = function(){
    console.log(`welcome ${this.username}`);
  }
}

const userOne = new nUser("raja",5,true)
 const userTwo = new nUser('khirod',8,'false') //the next value is always override the previus value for solution of this problem we use the new keyword  i.e. constructor fuction

console.log(userOne,userOne.greetings());
console.log(userTwo,userTwo.greetings());
//  console.log(userOne.constructor);