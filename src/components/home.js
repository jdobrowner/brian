import React, { Component } from 'react';
const headshot = require('../../images/BrianForbes.png');

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="home">
        <img className="" src={headshot} />
      </div>
    )
  }
}
