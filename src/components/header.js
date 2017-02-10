import React, { Component } from 'react';
import {Link} from 'react-router';

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <Link to="/">
        <h1><span className="firstName">BRIAN </span><span className="lastName">FORBES</span></h1>
      </Link>
        <Link to="/credits"><h3>credits</h3></Link>
      </header>
    )
  }
}

export default Header;
