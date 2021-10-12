import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main-container">
        <div className="navgoeshere1">
          <nav className='navigation'>
          <Link className='navlinks' to='/'>Home</Link>
            <Link className='navlinks' to='/projects'>Portfolio</Link>
            <Link className='navlinks' to='/contact'>Contact Me</Link>
           
          </nav>
        </div>
        

        <div className='pic'>
          <img src='https://i.imgur.com/pD9Kf8q.jpg'
            alt='profile'
            id='profile' />
            
        
        </div>

        <div className="about-me">
          <h1 className="my-name">👋 <br /> I'm Esther.</h1>
          <h3 className="subhead"> a Software Engineer.</h3>
        </div>
        <div className="button-div">
          <Link to="/contact" id="contact-me-link">
            <button className='hire-me'>Hire Me</button>
          </Link>
        </div>

        <div className="background-pic">
          <img
            // src="https://i.imgur.com/9LGr5ik.png?1"
            src="https://i.imgur.com/kAK9Gdh.png"
            alt="background"
            id="background"
          />
        </div>
        <div className='descrip'>
          <p className='aboutmetext'>
          "I'm a full-stack developer residing in New Mexico. I'm passionate about helping people capture their imagination to create captivating content. My previous pharmacy technician experience has given me the tools to work well under pressure in high-stress environments and also to function well in a group setting. My background in psychology has also given me the ability to understand people and befriend people with varying personality types. When I'm not coding, my hobbies include pilates, photography, painting, and piano." 
          </p>
        </div>

        {/* <Link to='/projects' id='projects-link'>
        <button className='projects-list'>Portfolio</button>
        </Link> */}
      </div>
    </>
  );
}

export default Home;
