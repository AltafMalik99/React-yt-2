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


const card = () => {
  return (

<div className="card">

<div>
    <div className="top">
    <img src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/amazon-logo.png" alt="" />
    <button>save <Bookmark size={12}/> </button>

  
  </div>
<div className="center">
  <h1>Amazon <span>5 day ago</span></h1>
  <h2>Senior UI/UX Designer</h2>
<div className='tag'>
  <h4>part time</h4>
  <h4>senior level</h4>

</div>

</div>
</div>
<div className="bottom">
  <div>
      <h3>$120/hr</h3>
      <p>karachi pakistan</p> 
    </div>
    <button className='btn'>Apply Now</button>

</div>

</div>

  )
}

export default card