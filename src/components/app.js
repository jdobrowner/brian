import React, {Component} from 'react';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="content-container">
          <Header />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
