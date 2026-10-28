//map,filter,reduce are some advance array methods.

const myNum=[1,2,3,4,5,6,7,8,9,10]
 let newNum=myNum.map((num)=>{ return num*10})  //map method returns a new array with specific operation
 console.log(myNum);
 console.log(newNum);

  newNum=myNum.filter((num)=>num>4)         //filter the array on basis of a condition and return new array.
  console.log(newNum);

  //chaining -it is the way of applying multiple method in a single statement.
 newNum= myNum
   .map((num)=>{
    result=num*10
    console.log(result)
    return result;
   })
   .map((num)=>{
    result=num+1
    console.log(result)
    return result;
   })
   .filter((num)=>num>40)
 console.log(newNum)

 //reduce method -it take two values from array previous value and current value.
 newNum=myNum.reduce((prev,cur)=>{      
     console.log(`prev:${prev} and cur:${cur}`);           //by default prev contain value of 0th index and cur contain value of 1st index. 
     return prev+cur},0)                             //we can also give explicitily value to prev by using (,)after the function scope.
 console.log(newNum);


 //e.g-1 adding the cource prices in the shopping cart.
 const myCart=[{
    courceName:"js Mernstack",
    price:2999
 },{
    courceName:"java fullstack",
    price:3999
 },{
    courceName:"python",
    price:999
 },{
    courceName:"data science",
    price:2999
 },{
    courceName:"Android",
    price:4999
 }]

  let Total=myCart.reduce((prev,cur)=> prev + cur.price,0)
 console.log(`sum of all the price of cources in the cart ${Total}`);