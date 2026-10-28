//there  is a given array of mark of student  filter out the mark of student that score 90+.

let mArr=[80,90,93,91,70,30,40]
const nMArr=mArr.filter((val)=>{
  return val>90;
})
console.log(nMArr);

//take a arr as input from user.
//use reduce method to calc sum of each number and product of each number
let len,arr4=[]
prompt('enter length:',len)
prompt("enter number:")
 let nSum=arr4.reduce((prev,current)=>{
     return current+prev 
 })