//get()- it is used to get the value from constructor
//set()-it is used to set the value of a variable

class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
       return `${this._email.toUpperCase()}abc`
    }

    set email(value){
        this._email=value
    }
    get password(){
         return  this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}


const nUser= new User("biswajit7520@gmail.com","biswajit@biswajit")
console.log(nUser.password);
console.log(nUser.email);
