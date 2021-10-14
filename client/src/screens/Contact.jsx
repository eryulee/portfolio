import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


const Contact = () => {
  const form = useRef();
  let history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xdj784n",
        "template_dms8e7i",
        form.current,
        "user_BprWeoht3mLXWPFWcoKy2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    history.push("/");
  };

  return (
    <div className="main-container3">
<div className="navgoeshere">
          <nav className='navigation'>
          <Link className='navlinks' to='/'>Home</Link>
            <Link className='navlinks' to='/projects'>Portfolio</Link>
          <Link className='navlinks' to='/contact'>Contact Me</Link>
          <Link className='navlinks' to='/resume'>Resume</Link>
            
          </nav>
      </div>
      
      <div className='some-text'>Send me an email!</div>

      <div className='form-div'>
      <div className='form-input'>
    <form className='form' ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Name:' className='input'/>
     <br />
      <input type="email" name="from_email" placeholder='Email:' className='input'/>
     <br />
          <textarea name="message" placeholder='Message:' className='input'/>
          <br />
      <input type="submit" value="Send" className='sendbtn'  />
      </form>
        </div>
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
  );
};

export default Contact;
