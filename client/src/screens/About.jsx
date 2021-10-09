import './About.css'
import { Link } from "react-router-dom";

import React from 'react'

export default function About() {
  return (
    <div className="main-container1">
      <div className="navgoeshere">
          <nav className='navigation'>
          <Link className='navlinks' to='/'>Home</Link>
            <Link className='navlinks' to='/projects'>Porfolio</Link>
            <Link className='navlinks' to='/contact'>Contact Me</Link>
            <Link className='navlinks' to='/about'>About Me</Link>
          </nav>
      </div>
      
      <div className='abmbody'>
          <div className='pic'>
          <img src='https://i.imgur.com/pD9Kf8q.jpg'
            alt='profile'
            id='profile' />
            
        
        </div>
      <div className='abmd'>
        <p className='me'>
        I'm a creative and detail-oriented full-stack Engineer in New Mexico. I'm passionate about helping people capture their imagination to create dynamic, efficient, and captivating narratives. When I'm not coding, my hobbies include pilates, photography, painting, and piano. 
        </p>
        </div>
        </div>

      {/* <div className='abmpic'>
        <img src='https://i.imgur.com/UAO1GYB.png'
          alt='abmpic'
        id='abmpic' />
      </div> */}

<div className="background-pic">
          <img
            src="https://i.imgur.com/9LGr5ik.png?1"
            alt="background"
            id="background"
          />
        </div>
      </div>
  )
}
