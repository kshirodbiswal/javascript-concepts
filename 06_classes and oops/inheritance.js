class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(` user ${this.username} logged in`);
    }
}

class Teacher extends user{
     constructor(username,email,password){
         super(username)  //used to initialize parent constructor
       this.email=email
       this.password=password
     }

    newCourse(){
        console.log(`new course is creted by ${this.username}`);
    }
}

const nuser = new Teacher("raja","user@abc",123)
const nwuser = new user("khirod","user@abc",123)

nuser.logMe()
nuser.newCourse()

nwuser.logMe()
// nwuser.newCourse()

console.log(nuser instanceof Teacher);