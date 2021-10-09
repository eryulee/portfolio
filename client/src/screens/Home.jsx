import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main-container">
        <div className="navgoeshere">
          <nav className='navigation'>
          <Link className='navlinks' to='/'>Home</Link>
            <Link className='navlinks' to='/projects'>Porfolio</Link>
            <Link className='navlinks' to='/contact'>Contact Me</Link>
            <Link className='navlinks' to='/about'>About Me</Link>
          </nav>
        </div>
        

        {/* <div className='pic'>
          <img src='https://i.imgur.com/pD9Kf8q.jpg'
            alt='profile'
            id='profile' />
            
        
        </div> */}

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
            src="https://i.imgur.com/9LGr5ik.png?1"
            alt="background"
            id="background"
          />
        </div>

        {/* <Link to='/projects' id='projects-link'>
        <button className='projects-list'>Portfolio</button>
        </Link> */}
      </div>
    </>
  );
}

export default Home;