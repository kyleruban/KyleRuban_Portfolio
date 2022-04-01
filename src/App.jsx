import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import './app.scss';

function App() {

  return (
    <div className="app">
      <Nav />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
    
  );
}

export default App;
