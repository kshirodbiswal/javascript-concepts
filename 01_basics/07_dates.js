 
 let myDate= new Date()
 console.log(myDate)
 console.log(myDate.toString())
 console.log(myDate.toDateString())
 console.log(myDate.toLocaleString())

 let myCreatDate=new Date(24,3,15)//in javascript month index is start from 0-jan.
 let myCreatDate2=new Date(24,3,15,5,8,7)
 console.log(myCreatDate.toLocaleString());
 console.log(myCreatDate2.toLocaleString());

 //creating timestamp
 let myTimeStamp=Date.now()
 console.log(myTimeStamp)
 console.log(Math.floor(Date.now()/1000))//converting milisecond to second

 let newDate=new Date()
 console.log(newDate)
 console.log(newDate.getMonth()+1)//get particular month   adding 1 bcz in js month starts from 0.
 console.log(newDate.getDay())//get the particular day

 //customize the date display
 newDate.toLocaleString('default',{
    weekday: "long"
 })
