let myName = "raja   "
console.log(myName.length);



let myHero=["thor","spidy"]

let heroPower={
    thor:"munior",
    spidy:"sense",

    getSpidyPower:function(){
        console.log(`spidy power is ${this.spidy}`);
    }
}

Object.prototype.raja=function(){
    console.log("this is present in all the object");
}

Array.prototype.heyBuddy=function(){
    console.log("hey buddy!have a nice day ");
}

myHero.raja()
myHero.heyBuddy()
// heroPower.heyBuddy()


// prototypal inheritance


const user={
    userName:"raja",
    email:"user@gmail.com"
}

const Teacher={
    makeVideo: true
}

const teachingSupport ={
    isAvilable: false
}

const TAsupport ={
    Assignment:"js assignment",
    fullTime: true,
    __proto__:teachingSupport         //connecting one object with another object
}

Teacher.__proto__ = user   //prototypal inheritance

//new  syntax
Object.setPrototypeOf(teachingSupport,Teacher)


let newUser="chaiaurcode   "

String.prototype.trueLength = function(){
     console.log(`${this}`);
    console.log(` true length is ${this.trim().length}`);
}

newUser.trueLength()
"raja".trueLength();
"refer  ".trueLength()