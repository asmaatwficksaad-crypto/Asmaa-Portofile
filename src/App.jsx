import React from 'react';
import Header from "./components/header.jsx";
import Home from "./components/home/home.jsx";
import Skills from "./components/grades/grades.jsx";
import Projects from "./components/projects/projects.jsx"
import Contact from './components/contact/contact.jsx';
import Btmcontact from './components/contact/btmcontact.jsx';
function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
          <Projects />
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      <Btmcontact/>
    </>
  );
}

export default App;