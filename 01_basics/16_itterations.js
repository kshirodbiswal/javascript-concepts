
//loops using the break and continue keyword.

for (let index = 1; index < 20; index++) {
    if (index===5) {
        console.log(`5 detected`);        
           break;                      //it removes the control flow from the block.   
     }
     console.log(`value of i is${index}`);    
}



for (let index = 1; index < 20; index++) {
    if (index===5) {
        console.log(`5 detected`);
         continue;                 //it ignores a single itteration when it is executed.
    }
     console.log(`value of i is${index}`);    
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//advance loops. These loops are array and object specific loops.

//for of loop
const arr= [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting = "hello user!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}



//Maps -It is just like a object but contain unique keys.
let map =new Map()

map.set('IN',"India")  //inserting values in Map.
map.set('USA',"United states of America")
map.set('FR',"France")
map.set('UK',"United Kingdom")
map.set('IN',"India")  //Map contain unique value.

//console.log(map)

for (const [keys,value] of map) {          //[keys,value] obtaining keys and values from map separately.
    console.log(keys ,'-', value);
}



// for of loop on object.
const obj={
    game1:"cod",
    game2:"FF"
}
// for (const [keys,value] of obj) {          
//     console.log(keys ,'-', value);               objects are not itterable using for of loop.
// }



//for in loop on object. 
//objects are itterable using for in loop
const lang={
    js:"javascript",
    cpp:"c++",
    py:"python"
}

for (const key in lang) {
    console.log(`${key} is the extension of ${lang[key]}`);    //object[key] use to acces the values of keys.
}


//for in loop on arrays.
const progLang=['js','cpp','java','python','swift ']

for (const key in progLang) {
    console.log(key);    // key of array is its index.
}

//note- for in loop by default returns the keys of any type object.


//for in loop on Maps.
for (const [keys,value] in map) {          
    console.log(keys ,'-', value);   // map is not iterable on for in loop.
}


//forEch method of array.
let ar=[10,20,30,40,50]
ar.forEach( function(val){ console.log(val*val)})  //functions inside the foreach loop are callback function and it doesnot contain any name.

ar.forEach( (item)=>{
    console.log(item);
})


//passing the function reference to forEach.
function print(item){
    console.log(item);
}
ar.forEach(print);


//retriving element ,index,array.
ar.forEach((item,idx,arr)=>{
    console.log(item,idx,arr);
})


// iterating array of object using forEach.
 const myCoding=[
{
    langName:"javaScript",
    extension:".js"
},
{
    langName:"java",
    extension:".java"
},
{
    langName:"python",
    extension:".py"
}
]

myCoding.forEach((item)=>{
    console.log(item.extension)
})

let val=ar.forEach((item)=>{
    return item;                 //forEach method doesn't return any value.
})
console.log(val);
// to return a value from the array by performing  operation on callback function we use filter and map method.

//if it is required to returning by forEach we can do it indirectly.
 const newAr=[];
ar.forEach((item)=>{
    newAr.push(item);                 
})
console.log(newAr)