import React, { Component } from 'react';
const headshot = require('../../images/BrianForbes.png');

export default class Projects extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="about">
        <img src={headshot} />
      </div>
    )
  }
}
