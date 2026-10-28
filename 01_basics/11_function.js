//arrow function
const min =(a,b)=>{
 if(b==undefined)
     b=1; 
 if(a<b)
  return a;
 else if(a===b)
  return 'no are same'
 else
  return b;
  }
  
//create a  function that takes a string as an argument and  return the number of vowels

let str='hll'
function vowelCheck(str){
     let cnt=0
    console.log("vowels are:")
  for(const i of str)
    {  
       if(i==="a" || i==="e"|| i==="i"|| i==="o"|| i==="U"|| i==="A"|| i==="E"|| i==="I"|| i==="O"|| i==="U")
        {
            console.log(i)
            cnt++
        }   
    }
    console.log(`${cnt} vowels`)
}
vowelCheck(str)

//   let a,b
//   prompt('enter two number',a,b)
//   console.log('minimum value is',min(a,b))
// console.log("null"==null)
// console.log("undefined"==undefined)
// console.log("NaN"==NaN)
// console.log(null==undefined)
// console.log(NaN==undefined)
// console.log(NaN==null)


// //tell user to input a number using prompt and check the number is a multiple of 5 or not
//  let num=prompt('Enter a number:')
//  if(num%5===0)
//      console.log(num,'is multiple of 5')
//  else
//  console.log(num,"is not multiple of 5")
//  //give a grade to the student according to their mark
//  let mark=prompt('enter your mark:')
//  if(mark>=80||mark<=100)
//      console.log('grade A')
//   else if(mark>=70||mark<80)
//     console.log('grade B')
// else if(mark>=60||mark<70)
//      console.log('grade C')
//  else if(mark>=50||mark<60)
//      console.log('grade D')
//  else
//      console.log('grade F')
//    let number=100
//    console.log('even numbers in range 100 are:')
//    for(let i in range (number))
//        {
//             if(i%2==0)
//                 console.log(i)
//         }
//        let name= prompt("enter your name:")
//        console.log(`@${name}${name.length()}`)


//user login message.
function userLogin(userName){
  if(!userName){
     return "please enter a valid user name"
  }
  return `${userName} is logged in`
}
console.log(userLogin())

//function accepting n number of parameter.

 function nParameters(...nums){ //(...) used in function arguments is called "rest operator".
   return nums
 }
console.log(nParameters())


//function taking object and array as a parameter.

 const obj={
  pName:"earbuds",
  price:999
 }
function handelObjects(product) {
  console.log(`product name is ${product.pName} and price is ${product.price}`);
  
}
handelObjects(obj)


 const newArray=["earbuds",999,15]
 function productList(product){
        // return `product is ${product.pName} and price is ${product.price} `
        return `product is ${product[0]} and price is ${product[1]}\ndiscount can applied of ${product[2]} percent`
 }
// console.log(productList(obj))
console.log(productList(newArray))