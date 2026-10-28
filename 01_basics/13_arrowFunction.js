//this keyword declaration
const user={
    name:"raja",
    greeting:function(){
        console.log(`hello ${this.name} welcome to vscode`)
        
    }
}
user.greeting()
user.name="sammy"
user.greeting()
console.log(this) // in node enviornment this refers to {} in case of empty scope.but in browser it refers to window object.
 
//only object can take this keyword not even function.
// function newuser() {
//    let username="raja"
//     console.log(this.username);
// }
// newuser()

// creating arrow function.
const calc= (num,num2)=>{
    return num + num2;
}
console.log(calc(10,20))

 let naming=()=> {
  name:"sammy"                  //arrow function also don't accept this keyword.
  console.log(this.name)
}
naming()

 //arrow function with implicity return
 let sum= (num,num2) => num + num2
 console.log(sum(100,200))
 sum=(num,num2) => (num + num2+num)
console.log( sum(100,200))

bio=(name,age) => ({name:name, age:age})  //returning object implicitly.
console.log(bio("rajaa",20));
