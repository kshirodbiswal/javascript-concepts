//promise is a object that represents the eventual complition and failuer of a asynchronus operation and its resulting value.
//it has three states  i>pending ii>fulfilled  iii>rejected


//creating promises
const promiseOne = new Promise((resolve,reject)=>{
        //  used in async program, network calls , db calls ,cryptography
        
        setTimeout(()=>{
            console.log("async task completed ");
            resolve()
        },1000)
    });

//consuming promise
promiseOne.then(()=>{             // then and resolve are connected.  
    console.log("promise resolved");
})


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task 2");
        resolve()
    },1000)
}).then(()=>{                             // directly using then()
    console.log("async 2 resolved");
})


//passing value from promise
const promiseThree= new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve({
        username:"raja",
        age:19                          //resolve only passes a single value
     },25)
   },1000)
})

promiseThree.then((user,val)=>{           
  console.log(`value ${val} for user `,user);
})


//chaining 

const promiseFour = new Promise((resolve,reject)=>{
     setTimeout(()=>{
       let error = false
    if(!error)
        {
            resolve({
                username:"ayush",password:"abc@123"
            })
        }
        else{
            reject("Error: something went wrong");
        }
     },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username  //return value to the next level of then()
})
.then((username)=>{
   console.log(username);
})
.catch((error)=>{       //it hold the error message from reject i.e. reject and catch are connected
    console.log(error); 
})
 .finally(()=>{  //it is the default execution 
     console.log('finally! promise completed');
 })

 //promise using async await

 const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let error = true
   if(!error)
       {
           resolve({
               language:"javascript",password:"abc@123"
           })
       }
       else{
           reject("Error: js went wrong");
       }
    },1000)
})


async function consumePromise(){
     try {
        const response = await promiseFive
        console.log(response);
     } catch (error) {
        console.log(error);
     }
}
consumePromise()

// async function  getUser(){
//         try {
//             const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//             //  console.log(response);
//             const data = await response.json()
//               console.log(data);
//         } catch (error) {
//             console.log("E:",error);
//         }
// }
// getUser()



//fetching data using then and catch method.
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
   return response.json()
})
.then((data)=>{console.log(data);})
.catch((error)=>{
 console.log(error);
})