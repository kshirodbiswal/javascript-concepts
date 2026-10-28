//this topic is related to description of properties of object

// console.log(Math.PI)
// Math.PI=10
//  console.log(Math.PI);

//  const property=Object.getOwnPropertyDescriptor(Math,"PI")
//  console.log(property);

 const myObj={
    name:"raja",
    age:19,
    carrier:"software",
    isComplete:function(){
        console.log("it is just begining of my carrier");
    }
 }

console.log(Object.getOwnPropertyDescriptor(myObj,"name")); //this method provides description about the properties of a object

Object.defineProperty(myObj,"name",{   //this method  allows to set custom property for objects
    writable: false,
    enumerable:false  //enumerable= looping
})

myObj.name="pujaa"
console.log(myObj);


for (let [key,value] of Object.entries(myObj)) { //Object.entries() is used to make object itterable
   if ( typeof value!=="function") {
    console.log(`${key}:${value}`);
   }   
}