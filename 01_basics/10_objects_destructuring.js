//objects can be destructured if it is using repeatedly and can be use in a simple way.

const cource={
    name:"javascript",
    fee:999,
    courceInstructor:"shradha"
}
console.log(cource.courceInstructor)
console.log(cource.courceInstructor)
//if  course.instructor is using repeatedly then it can be destructured in following way.

const {courceInstructor}=cource    //object destructuring
console.log(courceInstructor)

//we can also use the same property by a small name.
 const {courceInstructor:guide}=cource
 console.log(guide)
 //console.log(courceInstructor)

 //json -javascript object notation
 {
  //json is just like an object but coming from API calls. 
 }