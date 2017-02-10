import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <h1><span className="firstName">BRIAN </span><span className="lastName">FORBES</span></h1>
      </header>
    )
  }
}

export default Header;
