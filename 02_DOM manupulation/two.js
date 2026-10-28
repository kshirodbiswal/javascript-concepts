//relations
   const parent= document.querySelector('.parent')//select the first query with given value.
   console.log(parent);
   console.log(parent.children[1].innerHTML);

//    for(let i=0;i<parent.children.length;i++)
//    {
//     console.log(parent.children[i].innerHTML);
//    }

   parent.children[1].style.color="aqua"
   console.log(parent.firstElementChild);//returns the first child element.
   console.log(parent.lastElementChild);//returns the last child element.

   //accesing parent element from child.
   const day=document.querySelector(".days")
   console.log(day);
   console.log(day.parentElement);
   console.log(day.nextElementSibling);

   console.log("nodes:",parent.childNodes);//it is a nodeList like array includes the all the nodes inside the parent. linebreak and comments are also included
   
//creating element by js
 const div=document.createElement('div') //new element created.
 console.log(div);

 div.className="main" //giving a className
 div.id= Math.round(Math.random()*10 +1) //assign a unique number as  id by generating random number

 div.setAttribute('titel','dom') //defining custom attribute.
 
 div.style.backgroundColor="green"; //give styling
 div.style.padding="10px"

const content= document.createTextNode('Document Object Model')//give text content to the element
div.appendChild(content)//adding the content inside the div.

//it can be also done by another way.
//div.innerText='creating elements'

document.body.appendChild(div)//attach the div to the document.
