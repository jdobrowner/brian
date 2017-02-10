import React from 'react';
import Header from './header';
import Intro from './intro';
import Projects from './projects';
import About from './about-me';
import Contact from './contact';

function App() {
  return (
    <div className="app">
      <div className="content-container">
        <Header />
        <Intro />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default App;
