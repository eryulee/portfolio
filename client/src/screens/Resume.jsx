import './Resume.css'
import { Link } from "react-router-dom";

import React from 'react'

export default function Resume() {
  return (
    <div className='main-container'>

<div className="navgoeshere1">
          <nav className='navigation'>
          <Link className='navlinks' to='/'>Home</Link>
            <Link className='navlinks' to='/projects'>Portfolio</Link>
          <Link className='navlinks' to='/contact'>Contact Me</Link>
          <Link className='navlinks' to='/resume'>Resume</Link>
           
          </nav>
        </div>

      <div className='resume'>
        <img src='https://i.imgur.com/IWlMNVb.jpg'
          alt='resume-pic'
        id='resume-pic' />
      </div>
    </div>
  )
}

