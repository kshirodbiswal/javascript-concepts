//everything in javascript is almost object.even function also


function multiplyBy(num){
    return num*5;
 }

multiplyBy.power =2

 console.log(multiplyBy(5));
 console.log(multiplyBy.power);
 console.log(multiplyBy.prototype);

 function creatUser(userName,score) {
    this.userName=userName
    this.score=score
 }

 //adding functionality using prototype
 creatUser.prototype.increment = function (){
    this.score++;
 }
 creatUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`);
 }

 const user1= new creatUser("raja",25);
 const user2=creatUser("sahil",250);

 user1.increment()
  user1.printMe()