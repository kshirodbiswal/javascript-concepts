//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primitive),Heap(Non-primitive)


//stack memory
let myName="raja" // primitive type values are stored in stack memory where only a copy is assigned

let anotherName=myName;//when we assign myName to anotherName then it get a copy of the value in myName
anotherName="khirod"// so when we change the anotherName then only the copy is changed and the original value didn't

console.log(myName);//by print the myName we get the orignal value which is unchanged 
console.log(anotherName);


//heap memory
let userOne={         
    email:"user@google.com",          //non-primitive values are stored in the heap memory where the original reference is assigned
    upi:"user@ybl"
}

let userTwo=userOne  //when we assign userOne to userTwo then it get the original reference of the object

userTwo.email="raja@google.com"// so when we change the email of the object for userTwo then the original value of email is also changed

console.log(userOne.email);//therefore the email of the userOne is also changed to the new value
console.log(userTwo.email)

