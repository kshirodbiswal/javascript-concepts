
//It is a programing paradigm where the functions are treated as first class citizen.some main aspect of functional programing.

//1.pure function: it returns the same input as same output.it doesnot cause side effect.
function addition(a,b){
 return a+b;
}
let sum= addition(4,3)
console.log(sum)

//2.immutability: do not modify the original data instead  create some copies and assign to it.
let user={
    username:'muskan',
    email:'muskan@gmail.com',
    phone:9860246869
}
function updateUser(data){
           
          let updatedUser={...user,age:data}
          return updatedUser;
}
let updatedUser=updateUser(21)
console.log(updatedUser)

//3.declarative code:no need to write the custom logic to how to done instead use in-built method to focuse on the output.
let arr=[1,2,3,4,5]
let doubled=arr.map(elem=>elem*2)
console.log(doubled)

//4.avoid shared state: share the scope of  a variable  may lead to bug in async or parallel prog.

// let total=0;
// function addTotal(n){
//     total+=n                 this code can create bug bcz here the scope of variable is shared.
// }

function add(a,b){
    return a+b;
}

//5.avoid side effect: function any thing does outside its scope is called side effect.(e.g. api call,dom update,accesing global var)
function getgreetings(name){
    return `hello, ${name}`
}

//6.reuse or compose logic: Build small reusable functions and compose them together.
let toLower = str=>str.toLowerCase()
let removeSpace = str=>str.replaceAll(' ','')
let addAttherate = str=>`@${str}`

let str='Kshirod Biswal'
let result= addAttherate(toLower(removeSpace(str)))
console.log(result)

//7.Don't itterate: Avoid for, while, etc. Use map, filter, reduce.
let even=[1,2,3,4].filter(num=>num%2==0)
console.log(even)

//8.loose coupling
//Coupling refers to how dependent one piece of code is on another.
// Loose coupling means less dependent, Keep functions and modules independent.

function sendEmail(user){
 console.log('email send to',user.email)
}
function sendSMS(user){
 console.log('SMS send to',user.phone)
}
function sendwpMsg(user){
 console.log('MSG send on wp to',user.phone)
}

function notifyUser(fun,user){
 console.log('since you are verified')
 fun(user)
}
let nuser={
    name:'kshirod biswal',
    email:'kshirodbiswal208@gmail.com',
    phone:9861345970
}
notifyUser(sendEmail,user)
notifyUser(sendSMS,user)
notifyUser(sendSMS,nuser)

//9.First-class function and higher order function:
  //First-Class: Functions can be stored in variables, passed, and returned.
 //❑ Higher-Order: Functions that take other functions as arguments or return them

 function func(){
    console.log('it is a first class function')
 }

 function higherOrder(fun) {
    return fun
 }
 let res=higherOrder(func)
 res()
//   Note: 
// ❑ All callbacks are first-class functions, but not all first
// class functions are callbacks.
//  ❑ All higher order functions are first class functions but 
// not all first-class functions are higher order functions
