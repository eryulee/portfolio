import Home from "./screens/Home.jsx";
import Portfolio from './screens/Portfolio.jsx'
import Contact from './screens/Contact.jsx'
import { Route } from 'react-router-dom'
import About from './screens/About.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
      <Home />
      </Route>

      <Route path="/about">
        <About />
        </Route>

      <Route path="/projects">
        <Portfolio />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>
    </div>
  );
}

export default App;
