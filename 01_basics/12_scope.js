var c=30;
let a=10;
if(true){
    let a=100;
    const b=200;
    var c=300;
    console.log("inner:",a)
}
console.log(a)
// console.log(b)
console.log(c)

//nested scope
function one(){
    const name="raja"
    function two(){
        const platform ="github";
        console.log(name);
    }

    two()
}
 
one();

//function declaration difference.

console.log(fun1(8))
function fun1(num){     //this function declaration can take argument before the declaration.
    return num+1;
}
//console.log(fun1(8))

//console.log(fun2(8))
const fun2=function(num){
    return num+2;          //but this method only take argument after declaration.
}
console.log(fun2(8))

