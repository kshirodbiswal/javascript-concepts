// destructuring: Destructuring is a modern JavaScript feature (introduced in ECMAScript 2015/16) that allows you to extract values from arrays or properties from objects into distinct, separate variables

//1. Destructuring the ARRAY: 
// destructuring of array works on the basis of index/position

let arr=[1,2,3,"hello",false]


// let [first,second,third]=arr
// console.log(first)
// console.log(second)
// console.log(third)

//i.destructuring with rest operator
 let [first,second,third, ...rest]=arr
 console.log(rest)

 //ii.assign default value using destructure
 let[one,two,three,four=0]=[10,15,20]
 console.log(four)

 //iii.skip the element of array
 let[,,c,,e]=[1,2,3,4,5]
 console.log(c,e)

 //iv.swaping values using destructuring
 let a=10;
 let b=5;
 [a,b]=[b,a]
 console.log(a,b)

 //v.destructure the nested array
let [a2,,,d]=[1,3,5,[7,9]]
let [d1,d2]=d
console.log(d1,d2)


//2.Destructuring the OBJECT: 
// destructuring a object is based on  the keyname therefore it is required to be the key name and destructured variable name should be same.

let obj = {
    name:'RaJa',
    age:21,
    isMarried:false,
    education:'graduate'
}

// let {name,age} =obj
// console.log(name,age)

//i.destructuring with rest
let {name,age,...others}=obj
console.log(name,age,others)

//ii.assigning default values
let{myName,myAge=21}={myName:'raja'}
console.log(myName,myAge)

//iii.renaming variables:{keyName:newName}
  let{name:fullName}={name:'raja'}
  console.log(fullName)

//iv.nested object:{key:{newName}}
let nestedObj={
    name:"RaJaa",
    age:21,
    address:{
        city:"bbsr",
        pincode:123409,
        street:["barmunda","firestation","nayapalli"]
    }
}

let{name:nickname,age:adult,address,address:{pincode:code},address:{city}}=nestedObj
console.log(city,code)


// trickey questions

//q1
let array=[1,2,3]
obj={...array}
console.log(obj) //o.p: first it spreads(...) then it format it to object using index as key

//q2. How does using spread help avoid mutation? Modify the object without affecting the original? 
 obj={girlfried:"anamika",age:20}

  let copyObj={...obj,city:'bbsr'}
   copyObj.color='white'

 console.log(obj)
 console.log(copyObj)

//q3.Write a function that take numbers as argument and separates even and odd numbers and return an object with evens and odds and destructure the output while calling function.

function evenOddCheck(...arr){

    // 1st way
    // let {even,odd}={even:[],odd:[]}
    // arr.forEach((num)=>{
    //     if(num%2==0)
    //        even.push(num)
    //     else
    //         odd.push(num)    
   // })


   //2nd way
    let even= arr.filter(num=>num%2===0)
    let odd= arr.filter(num=>num%2!==0)

 return   {even,odd}

}
let result=evenOddCheck(1,2,3,4,5,6,7,8,9)
console.log({even,odd}=result)


// q4.Create a custom JavaScript function that behaves like React’s useState.
//  The function should:
// .Store a value (like state).
// .Return two things: the current value and a function to update it.
// Use array destructuring to extract both the value and the setter when calling your function.

function customUseState(initialVal){

    let val=initialVal
    let setValue=(updatedVal)=>{

        val=updatedVal
    }
   
    let getValue=()=>{
        return val
    }
    return [getValue,setValue]
}

let[getValue,setValue]=customUseState(5)
console.log(getValue())
setValue(20)
console.log(getValue())