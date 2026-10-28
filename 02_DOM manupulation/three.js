//Adding element
function addLang(langName){
   const li= document.createElement('li')
   li.innerHTML = `${langName}` 
   document.querySelector('.lang').appendChild(li)
}
addLang('java')
addLang('python')

//optimised way to add element.
// optimised bcz createTextNode doesn't travers the entire DOM tree.
function addOptiLang(langNme){
   const li= document.createElement('li')
   li.appendChild(document.createTextNode(langNme))
   document.querySelector('.lang').appendChild(li)
}
addOptiLang('ruby')

//Edit element
const sec=document.querySelector('li:nth-child(2)')
const nLi=document.createElement('li')
nLi.textContent="goLang"
sec.replaceWith(nLi)

const first=document.querySelector("li:first-child")
first.outerHTML='<li>Typescript</li>'

//remove element
const last=document.querySelector('li:last-child')
last.remove()