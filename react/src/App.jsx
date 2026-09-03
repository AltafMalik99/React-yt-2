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


import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>

<div className="card">
  <div className="top">
    <img src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/amazon-logo.png" alt="" />
    <button>save <Bookmark /> </button>
  </div>
<div className="center">
  <h1>Amazon <span>5 day ago</span></h1>
  <h2>Senior UI/UX Designer</h2>
<div>
  <h4>part time</h4>
  <h4>senior level</h4>

</div>

</div>
<div className="bottom">
  <div>
      <h3>$120/hr</h3>
      <p>karachi pakistan</p>
    </div>
    <button>Apply Now</button>

</div>

</div>

    </div>
  )
}

export default App

// videp :2:00