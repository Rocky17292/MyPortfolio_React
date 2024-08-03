import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MySkills from './Components/MySkills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import CursorTrail from './Components/CursorTrail';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div style={{ backgroundColor: "#131718", color: "white" }}>
            <Navbar />
            <CursorTrail />
            <Element name="home">
              <Header />
            </Element>
            <Element name="skills">
              <MySkills />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>
            <Element name="experience">
              <Experience />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
