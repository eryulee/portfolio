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
    <div className="main-container">
<div className="navgoeshere">
          <nav className='navigation'>
          <Link className='navlinks' to='/'>Home</Link>
            <Link className='navlinks' to='/projects'>Porfolio</Link>
            <Link className='navlinks' to='/contact'>Contact Me</Link>
            <Link className='navlinks' to='/about'>About Me</Link>
          </nav>
        </div>

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      </form>
      </div>
  );
};

export default Contact;
