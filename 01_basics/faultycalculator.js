  //creat a fulty calculator which display wrong output on a random iteration
  
 //console.log()always returns undefine.
  let a//=20
  let b//=10
  let operator //="+"
   prompt("Enter operands:",a,b)
  prompt("Enter operator",operator)
  let cnt=0
  const faultyCalc=(a,b)=> {
      let faulty=(Math.random()*10)+1
      console.log(faulty)
      let num= Math.trunc(faulty)
      console.log(num)
     if(cnt==num){
        if(operator="+")
            console.log("sum=",a-b)
              else if(operator="-") 
              console.log("sub=",a+b)
              else if(operator="*") 
              console.log("multiplication=",a/b)
              else if(operator="/") 
              console.log("division=",a*b)   
             else       
             console.log("power=",a**b)
            }
        else
         calc(a,b);
 }

 const calc=(a,b)=>{
     cnt++
    if(operator="+")
    console.log("sum=",a+b)
      else if(operator="-") 
      console.log("sub=",a-b)
      else if(operator="*") 
      console.log("multiplication=",a*b)
      else if(operator="/") 
      console.log("division=",a/b)  
     else       
     console.log("power=",a%b)
 }

 faultyCalc(a,b)