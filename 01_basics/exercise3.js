// const obj={
//     name:"raja",
//     class:"bca",
//     roll_no:20
// }
// for( let i in obj)
//   console.log(obj)
// for(let i=0;i<7;i++){
//     let output=""
//  for(let j=0;j<=i;j++)
//  { 
//       output+='#'
//  }
//  console.log(output)
// }

//fizzbuzz program

// for(let i=1;i<=100;i++)
// {
//      if(i%3===0&&i%5===0)
//        console.log('fizz buzz')
//     else if(i%3===0)
//      console.log('fizz')
//     else if(i%5===0)
//      console.log("buzz")

//    else
//    console.log(i)
// }

//chessboard grid


let pattern=''

for(let i=0;i<8;i++)
{   let hash=' '
     
   for(let j=0;j<8;j++)
   {
   if((i+j)%2===0){
   hash+=" "
   }
   else{
   hash+='#'
    
   }
}   
  pattern += hash +"\n"
}
console.log(pattern) 

//difference between break and continue in loops
//Break- it move the cursor outside the loop and terminate the execution
//Continue- it only skips the current execution but still remain in the loop. 