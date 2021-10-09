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
        "template_7wzy2y9",
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
            
          </nav>
      </div>
      
      <div className='some-text'>Send me an email!</div>

      <div className='form-input'>
    <form className='form' ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Name:' className='input'/>
     <br />
      <input type="email" name="user_email" placeholder='Email:' className='input'/>
     <br />
          <textarea name="message" placeholder='Message:' className='input'/>
          <br />
      <input type="submit" value="Send" className='sendbtn'  />
      </form>
      </div>
      </div>
  );
};

export default Contact;
