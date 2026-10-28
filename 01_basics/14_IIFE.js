 // IIFE - Immidietly invoked function expression.
 // IIFE is used to immidietly invoke the function and resolve the issue of global namespace polution and keep the code private.
 // syntax- (function(){ code})()
 // function is wrapped inside ()and after that () is used for function call.

 
 //IIFE declaration
  (function wishing(){
    console.log("good morning!")
  })();

//IIFE with arrow function.
(()=>{
    console.log("Have a nice day!")
})();
//function with argument
((name)=>{
    console.log(`Hello ${name}!Have a nice day!`)
})("raja")