//functional scope problem in function call inside another function

function setUserName(username){
   this.username=username
   console.log("executed");
}

function creatUser(username,email,password){

  setUserName.call(this,username)  //call() is used to hold the data from the execution contex which is going to vanish after the execution 
                //this is passed with call() to store the value in current contex
 this.email=email
 this.password=password

}

const user= new creatUser("raja","raja@gmail.com",9861)
console.log(user);