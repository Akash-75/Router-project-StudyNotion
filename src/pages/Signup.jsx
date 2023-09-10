import React from 'react'
import Template from '../Components/Template'
import signupImg from '../assets/signup.png';


const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title = "Join the millons of learning to code with StudyNotion for free"
        desc1 = "Build skills for today, tomarrow, and beyond."
        desc2 = "Education to future-proof your career."
        image = {signupImg}
        formtype = "signup"
        setIsLoggedIn = {setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
