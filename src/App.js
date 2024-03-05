import './style/App.css';
import './style/About.css';
import Home from './Home.js'
import About from './About.js';
import React from 'react';
import Resume from './Resume.js';
import Projects from './Projects.js'
import Contacts from './Contacts.js'

function App() {
  return (
    <div>
      <Home />
      <About/>
      <Resume />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
