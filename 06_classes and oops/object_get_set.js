//defining get() and set()  using object in old code

const  userObj={
    _email: "user@gmail.com",
    _password:"abc@197",

    get email(){
      return  this._email.toUpperCase()
    },

    set email(value){
       this._email=value
    }
}

const user=Object.create(userObj) //object.create() is a factory function
console.log(user.email);

//  note: "_" is used to set a variable to private variable 
// but if we use get() and set() there is no more relevance of privating it .then get() and set() is override the value.