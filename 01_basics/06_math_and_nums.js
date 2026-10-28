 const score= 400
 console.log(score)

 const balance = new Number(100)
 console.log(balance)

 console.log(balance.toString().length)//convert to string
 console.log(balance.toFixed(2))//return a fixed pricision after the decimal.

 const newNum=199.2448
 console.log(newNum.toPrecision(3))//precise the entire number on basis of input

const bigNum= 1000000
console.log(bigNum.toLocaleString())
// by default the commas are of USA standard. to make commas on basis of indian  standard we do this.
console.log(bigNum.toLocaleString('en-IN'))//it is of indian standards.

//***************************Maths************************** */

console.log(Math);
//eliminates the negative sign
console.log(Math.abs(-30));
console.log(Math.abs(10));

console.log(Math.round(2.4));//round the decimal value
console.log(Math.ceil(4.1));//round to upper number
console.log(Math.floor(3.7));//round to below number

console.log(Math.min(10,5,4,28,30));
console.log(Math.max(10,5,4,28,30));

//random number generation.
console.log(Math.random());//generate a random value between zero to one 
console.log(Math.random()*10);//for find a random number between 10
console.log(Math.random()*10+1);//to avoid the condition where the random value shoould be 0.078... etc  contain zero in first fraction value.

//find a random number between min and max value.
const min=1
const max=100
console.log(Math.floor(Math.random()*(max-min+1))+min);
