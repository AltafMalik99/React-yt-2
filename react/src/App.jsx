// import React from 'react'
// import Card from './components/card'

// const App = () => {
//   return (
//     <div>
      

// <Card user="malik" age={20} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6j80x_wUI21m4TY9OsLKrBA-5m5rAZ3S49ITuvQ0Tg&s" />
// <Card user="sad bhai" age={28} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXz_uXJ3pWNzndxv4HtU9QZroaxEyo1AkC1iMoUHe6Uw&s=10"/>

//     </div>
//   )
// }

// export default App


import { use } from 'react'
import Card from './components/card' 
import User from './components/User'


const App = () => {
  const jobOpenings = [

    {
      brandLogo: "https://logo.clearbit.com/ibm.com",
      companyName:"IBM",
      deletePosted:"2 days ago",
      post: "ai research",
  tag1:"full time",
  tag2:"senior level",
  pay:"$100/hour",
  location:"karachi",
},

  {
  brandLogo: "https://logo.clearbit.com/tesla.com",
  companyName:"tasla",
  deletePosted:"3 days ago",
  post: "software engineer",
  tag1:"full time",
  tag2:"senior level",
  pay:"$120/hour",
  location:"punjab"
},{
  brandLogo: "https://logo.clearbit.com/tesla.com",
  companyName:"tasla",
  deletePosted:"3 days ago",
  post: "software engineer",
  tag1:"full time",
  tag2:"senior level",
  pay:"$150/hour",
  location:"punjab"
},{
  brandLogo: "https://logo.clearbit.com/tesla.com",
  companyName:"tasla",
  deletePosted:"3 days ago",
  post: "software engineer",
  tag1:"full time",
  tag2:"senior level",
  pay:"$100 hour",
  location:"punjab"
},{
  brandLogo: "https://logo.clearbit.com/tesla.com",
  companyName:"tasla",
  deletePosted:"3 days ago",
  post: "software engineer",
  tag1:"full time",
  tag2:"senior level",
  pay:"$190/hour",
  location:"punjab"
},{
  brandLogo: "https://logo.clearbit.com/tesla.com",
  companyName:"tasla",
  deletePosted:"3 days ago",
  post: "software engineer",
  tag1:"full time",
  tag2:"senior level",
  pay:"$100/hour",
  location:"punjab"
},{
  brandLogo: "https://logo.clearbit.com/tesla.com",
  companyName:"tasla",
  deletePosted:"3 days ago",
  post: "software engineer",
  tag1:"full time",
  tag2:"senior level",
  pay:"$100/hour",
  location:"punjab"
},{
  brandLogo: "https://logo.clearbit.com/tesla.com",
  companyName:"tasla",
  deletePosted:"3 days ago",
  post: "software engineer",
  tag1:"full time",
  tag2:"senior level",
  pay:"$100/hour",
  location:"punjab"
},{
  brandLogo: "https://logo.clearbit.com/tesla.com",
  companyName:"tasla",
  deletePosted:"3 days ago",
  post: "software engineer",
  tag1:"full time",
  tag2:"senior level",
  pay:"$100/hour",
  location:"punjab"
}
  ]

console.log(jobOpenings);

  

  return (
    <div className='parent'>

{jobOpenings.map(function(elem){
  return <h1>{elem.companyName}</h1>
})}
  

    </div>
  )
}

export default App


// videp :2:31









// const App = () => {


// const arr = [
//   {
//     user: 'altaf',
//     age:20
//   }
//   ,{
//     user:"aftab",
//     age:23
//   }
//   ,{
//     user:"saqib",
//     age:21

//   }
// ];

// arr.map(function (elem){
//   console.log(elem.age);
  
// })



/*<Card user={"Amazon"} post={"Senior UI/UX Designer"}day={"5 day ago"} salary={"$120/hr"}location={"karachi pakistan"}img="./Screenshot 2026-08-29 214427.png"/>
<Card user={"Microsoft"}post={"senior software engineer"} day={"2 day ago"}salary={"$150"}location={"punjab pakistan"}/>
<Card user={"Whatsapp"} post={"Data science"}day={"7 day ago"} salary={"$50"}location={"lahor pakistan"}/>
<Card user={"Facebook"}post={"Digital markiting"} day={"1 day ago"}salary={"$200"}location={"islambad pakistan"}/>
<Card user={"Facebook"}post={"Digital markiting"} day={"1 day ago"}salary={"$200"}location={"islambad pakistan"}/>
 */