import React, {Component} from 'react';
import Header from './header';
import About from './about';
import Skills from './skills';
import Credits from './credits';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="content-container">
          <Header />
          <About />
          <Skills />
          <Credits />
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;
