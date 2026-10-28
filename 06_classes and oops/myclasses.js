// class user{
//  constructor(username,email,pass){
//  this.username=username
//  this.email=email
//  this.pass=pass
//  }

//    encryptPassword(){
//     return `${this.pass}@abc`
//   }

//   changeCase(){
//     return `${this.username.toUpperCase()}`
//   }

// }

// const nUser = new user("rajaa","user@abc",123)

// console.log(nUser.encryptPassword());
// console.log(nUser.changeCase());

//behind the scene without using the class


function cuser(username,email,pass){
    this.username=username
    this.email=email
    this.pass=pass
}

cuser.prototype.encryptPassword = function(){
    return `${this.pass}@abc`
}

cuser.prototype.changeCase = function(){
     return `${this.username.toUpperCase()}`
}

const nwUser = new cuser("rajaa","user@abc",123)

console.log(nwUser.encryptPassword());
console.log(nwUser.changeCase());
