// import React from 'react'

// const card = (props) => {
//     console.log(props);
    
//   return (
//     <div className='card'>
// <div>

// <img src={props.img} alt="" />
// <h1>{props.user},{props.age}</h1>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, labore?</p>

// </div>

//     </div>
//   )
// }

// export default card



import {Bookmark} from 'lucide-react'
import { use } from 'react'


const card = (props) => {
  return (

    console.log(props.user),
    

<div className="card">

<div>
    <div className="top">
    <img className='img2' src={props.img} alt="logo" />

    <div className='btn2'>
    <button className='btn2'>save<Bookmark size={12}/> </button>
    </div>
  
  </div>
<div className="center">
  <h1>{props.user} <span>{props.day}</span></h1>
  <h2>{props.post}</h2>
<div className='tag'>

  <h4>part time</h4>
  <h4>senior level</h4>


</div>

</div>
</div>
<div className="bottom">
  <div>

<div className='line'></div>
      <h3>{props.salary}</h3>
      <p>{props.location}</p> 
    </div>
    <button className='btn'>Apply Now</button>

</div>

</div>

  )
}

export default card