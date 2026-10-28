const name = "raja"
const score= 19
// console.log(name+score)
console.log(`hii i am ${name} and my age is ${score}`)// `${placeholders}`-string interpolation

const myName = new String(`kshirod-Biswal-raja`)
console.log(myName[1])
console.log(myName.length)

console.log(myName.toUpperCase());

console.log(myName.charAt(2));
console.log(myName.indexOf(`k`));

console.log(myName.substring(1,4));
console.log(myName.slice(-14,5))
//difference between substring and slice is that
// slice can take negative value but substring can't.

const newString ="  raja  "
console.log(newString.trim())

const url="https://new.com/raja%20raja"
console.log(url.replace('%20','-'))
console.log(url.includes("raja"))
//in url encoding system if any space is given then the browser replace it to %20 . 

console.log(myName.split("-")) //split the string on the basis of value given and create a array.