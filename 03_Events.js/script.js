//selecting a element by using diff. approaches

//  document.getElementById('owl').onclick = ()=>{
//    alert("This is a owl") 
//  }

// more approaches
//attachEvent()-popular in internet wxplorer time
//jQuery- on



//++++++++++++++++important event attributes++++++++++++++++
//type,timestamp,defaultPrevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keycode


document.getElementById('images').addEventListener('click',(e)=>{
//   alert('owl clicked')
//   console.log(e);
console.log('click inside the ul');
},false)

document.getElementById('cricket').addEventListener('click',(e)=>{
    e.stopPropagation() // stop the bubling 
     console.log('cricket clicked');
},false)

document.getElementById('google').addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('google clicked');
})

//Event propagation - it determines the order of the execution of eliment in diff. events.
//it is of 2 types

// i>Bubling
// selecting the element from buttom to approach including parent and ancesters.
//It is the default type of propagation i.e. it happens when  the default values are false.

//ii>capturing
//selects the element from top to bottom approach i.e. parent to child.
//It happens when all the eventListener value true is present.


//v.v.imp
// note - if the parent event is true and child event is false then the  capturing is happen
// note - if the parent event is false and child event is true then the  bubling is happen


//removing a element when it get clicked.
document.getElementById('images').addEventListener('click',(e)=>{
 console.log(e.target.parentNode);
 let removeEl= e.target.parentNode
 removeEl.remove()
},false)