//  object declaration :  i>constructor method /singletone object - object.create
//                     : ii>object literals 

//object literal type

const sym=Symbol("key")

const user={         // objects are the set of key value pair.
    name:"raja",     //  key:value;
    age:19,
    sym: "hello",    //symbol is not defined in object
    [sym]: 'hii',     //symbols are represented in object  by using []
    "cur age": 20,
    location:"chhatia"
}

//object acces methods
console.log(user.age)  
console.log(user["age"])
console.log(user["cur age"])  //keys with " " can't be acces by (.) it is only acces by [""]
console.log(user.sym)
console.log( typeof user.sym) // it is not acces as a symbol but it is a string.
console.log(user[sym])       //symbols are acces by using [] 

//changing the values of object
 user.age = 20;
 console.log(user.age)
 //freezing the object  so that any change in the object after it can't happen.
 //Object.freeze(user)
 user.age=25; //change doesnot ocuure bcz object is freeze.
 console.log(user) 

 //adding a function inside an object.

user.greetings= function(){
    console.log("hello user")
}

console.log(user.greetings) //here the function is only define and not in use.
console.log(user.greetings())

user.greetings2 = function(){
    console.log(`hello user ${this.name}`)  //this keyword is use to reference the same object
}

console.log(user.greetings2());

//singleton object declaration

// const fUser = new Object();
// fUser.name="raja";
// fUser.id= "231abc"
// console.log(fUser)

//object inside an object -nesting of object
const instaUser={
    name:"raja",
    age:20,
    fbUser:{
        fbId:"Raja Raja",
        age:18
    },
    instaId:"itz__raja__"
}
console.log(instaUser.instaId,"\n",instaUser.fbUser)

//combining multiple objects
const obj1={name:"raja",
      height:5.9
}
const obj2={age:20}
const obj3={stream:"Bca"}
//const obj4=Object.assign({},obj1,obj2,obj3) //assign the source object to first targeted object.
obj4={...obj1,...obj2,...obj3}  // ... -spread operator spreads the object into a single object.
console.log(obj4)

//array of objects
alUser=[instaUser,user]
console.log(alUser[0])
console.log(Object.keys(instaUser)); //creats a array from keys of object
 console.log(Object.values(instaUser)); //creats a array from values of object.
console.log(Object.entries(instaUser)); //creates arrays from key :value pairs.
console.log(instaUser.hasOwnProperty('fbUser')); //check wheather a property is present or not.