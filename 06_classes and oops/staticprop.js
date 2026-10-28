class user{
    constructor(username){
          this.username=this.username
    }

    logMe(){
        console.log(`user ${this.username} logged in`);
    }

     static createId(){
        return `abc`    // static prevent the objects of this class to acces the property
    }
}

const userOne=new user("rajaa")

// console.log(userOne.createId());    show error bcz trying to acces static method