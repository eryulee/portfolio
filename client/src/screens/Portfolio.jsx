import "./Portfolio.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";

export default function Portfolio() {
  return (
    // <div>
    <div className="listing-projects-div">

<div className="main-container">
        <div className="navgoeshere1">
          <nav className='navigation'>
          <Link className='navlinks' to='/'>Home</Link>
            <Link className='navlinks' to='/projects'>Portfolio</Link>
            <Link className='navlinks' to='/contact'>Contact Me</Link>
            <Link className='navlinks' to='/resume'>Resume</Link>
           
          </nav>
        </div>
      
        <div className="proj-div">
          <a href="https://eryulee.github.io/VINEit/" target="_blank">
            <div className="card-container">
              <img
                src="https://i.imgur.com/hYz2VWA.png?2"
                alt="vine-img"
                id="vine-img"
              />
            </div>
              <div className='card-title'>
                <p className="card-name">This wine app was built using vanilla JavaScript and pure css.</p>
              </div>
          </a>
        </div>

        <div className="proj-div">
          <a href="https://crib-notes.netlify.app/" target="_blank">
            <div className="card-container">
            <img
                src="https://i.imgur.com/LHRYOvi.png?1"
                alt="crib-img"
                id="crib-img"
              />
            </div>
              <div className='card-title'>
                <p className="card-name">Crib Notes is an app that I built using React and pure css. I used airtable to build out my own API. It is published on netlify. It is an app where users can compare, review, and rate different baby products.</p>
              </div>
          </a>
        </div>

        <div className="proj-div">
          <a href="https://tea-pouch.netlify.app/" target="_blank">
            <div className="card-container" >
              <img
                src="https://i.imgur.com/mwOuGP7.png?1"
                alt="tea-img"
                id="tea-img"
              />
              <div className='card-title'>
                <p className="card-name1">Tea Pouch is a full stack open source app that I built using Ruby, Ruby on Rails, heroku, react, JavaScript and deployed using netlify. Tea Pouch is an app where users can add and recommend their favorite tea blends.</p>
              </div>
              <div className='extra-space'>
                </div>
            </div>
          </a>
        </div>
        <hr />

        <div className='footer'>

       
<div className='linkedin-div'>
<a href='https://www.linkedin.com/in/esther-ryu-lee/' target='_blank'>
<img src='https://i.imgur.com/n473TYn.png'
  alt='linkedin'
id='linkedin'/>
  </a>
  </div>

<div className='git-div'>
<a href='https://github.com/eryulee' target='_blank'>
  <img src='https://i.imgur.com/v6qvRxk.png'
    alt='github'
  id='github' />
</a>
</div>

</div>

      </div>
    </div>
  );
}
