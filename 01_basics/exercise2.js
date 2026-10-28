//operators and expression

 let age=12//prompt("enter your age")
if(age>10&&age<20)
console.log("your age is in the valid range")
else
 console.log("your age is not in the valid range")
//use of switch  case
let name=prompt("enter your name")
switch(name)
{
 case('raja'):
 {
    console.log("your email id is: raja@100")
    break
 }
 case('hari'):
 {
    console.log("your email id is:hari@200")
    break
 }  
 default:
    console.log("invalid user!")
}
//find a number is divisible by 2 or 3
let num=prompt("enter a number")
if(num%2===0)
 console.log('number is divisible by 2')
else if(num%3===0)
 console.log('number is divisible by 3')
else
 console.log('nunmber is not divisible by 2 and 3')
//check the value of a given variable is null or not 
//it is done by using the js type correction rule
let val=prompt('enter a value')
if(val==null)
 console.log('you have enter a null value')
else
console.log('entered value is ',val)

//switch case 

let month=9;
switch (month) {
   case 1:
       console.log("jan");
      break;
   case 2:
       console.log("feb");
      break;
   case 3:
       console.log("march");
      break;
   case 4:
       console.log("april");
     break;
   case 5:
       console.log("may");
      break;
   case 6:
       console.log("june");
      break;
   case 7:
       console.log("july");
      break;
   case 8:
       console.log("aug");
      break;

   default:
      console.log("please enter month till august!")
     
}

// note- if brewa