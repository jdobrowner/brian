import React, { Component } from 'react';
import about from '../content/about';

export default class Projects extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="about">
        <div className="sub-header">
          <h3>About Me</h3>
        </div>
        <div className="project">
          <div className="box">
            <p>{about.intro}</p>
          </div>
          <div className="box">
            <p className="likes-title"><span>Some Things I Like</span><br/></p>
              <div className="project">
                <div className="box likes">
                  <p>Sci-Fi Literature</p>
                  <p>History</p>
                  <p>Board Games</p>
                </div>
                <div className="box likes">
                  <p>Sequoia Trees</p>
                  <p>Southern Utah</p>
                  <p>Lakers</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
