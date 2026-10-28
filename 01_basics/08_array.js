//find out the average mark of student
let marks=[10,20,30,40]
let avg=0
for(let mark of marks)
    {
 console.log(mark)
  avg+=mark
    }
console.log("average mark=",avg/marks.length)

//here given the value of product in a array find out the final price after giving a discount of ten percent.
//price(200,500,700,100,800)
let price=[200,500,700,100,800]
let discount
let finalPrice=[]
console.log("final price=")
for(i=0;i<price.length;i++)
    {
      discount=price[i]*(10/100)
      finalPrice[i]=price[i]-discount
      console.log(finalPrice[i])
    }
 // using for of loop
 for( let item of price)
    {
        discount=item*(10/100)
        item-=discount
        console.log(item)
    }  
 //array method
 let arr=[10,20,30,40,50]
 arr.push(60)//add at the end index
 console.log(arr)   
  let deleted=arr.pop()//remove from end index
  console.log(arr)
  console.log(deleted) 
  console.log(arr.toString())//convert a array to string
  let arr2=["cuttack","bbsr","rkl"]
 console.log(arr.concat(arr2))//add two array
 arr2.unshift("jajpur")//add element at the begining
 console.log(arr2)
 arr2.shift()//remove from the begining
 console.log(arr2)
 console.log(arr.slice(2,4))//display only the selected element from starting and ending index
 arr.splice(3,2,60)//delete,add,replace selected element splice(index,deleteCount,addElement...).it manupulate the original reference of array.
 console.log(arr)
 arr.join(arr2);//joins two array in string format.
 console.log(arr);
let company=["microsoft",'bloomberg','adobe','ola','uber']
// console.log(company.shift())
company.splice(3,2,"amazon")
console.log(company)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//array can take any data including array himself.
const cricket=["virat","rohit","dhoni","sachin"]
const football=["ronaldo","messi","chetri"]
      //create a new copy
//cricket.push(football)
console.log(cricket)

alSports=cricket.concat(football)//works on existing array
console.log(alSports)

alNewSports=[...cricket,...football]// (...)- sprade operator sign spreads a array to elements.
console.log(alNewSports)

alNums=[1,2,3,[4,5,6],7,8,[9,[10,11,"end"]]];
console.log(alNums.flat(Infinity));//creates a single array from multiple subarray.

 let name='raja'
console.log(Array.isArray("raja")); //check  a given value is a array or not.
console.log(Array.from(name))  //converts any type to array.
console.log(typeof name)

score1=100
score2=200
score3=300
console.log(Array.of(score1,score2,score3)) //converts multiple values to arrray

array1=[10,20,30]
array2=[40,50,60]
console.log(array1+array2)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for a given array of numbers print the square of each values
//forEach method.
let arr3=[10,20,30,40,50]
arr3.forEach((value,index,arr3)=>{            //forEach method  returns the each element of array. it works as a loop.
   console.log(value*value,index,arr3)        //it have three default values  value,idx,array
});

//map method
let newArr=arr3.map((val)=> val*val )
console.log(newArr)

//filter method
//find the even nmbers from array
arr3=[10,11,12,15,20,22,17]
  newArr=arr3.filter((val)=>{      //it filters  the array on the basis of a condition
      return val%2===0
})
console.log(` even numbers ${newArr}`)

//reduce method
//find the greatest number from array
 let  newVar=arr3.reduce((current,next)=>{     //reduce the array to a single value on a condition basis.
   return  current>next?current:next
})
console.log(`greatest number is ${newVar}`)


