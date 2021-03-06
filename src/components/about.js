import React from 'react';
const headshot = require('../../images/Brian_Headshot_2017.jpeg');

function About() {
  return (
    <div className="about">
      <div className="width70">
        <h3>| about |</h3>
        <p>I'm a senior editor and producer for television with over 20 years of post-production experience.<br /><br />From SYFY to NBC to MTV, I've worked with industry leaders in telling visual stories that are memorable and entertaining. When leading my team, I integrate narrative vision with creative collaboration to make sure we meet deadlines and craft effective stories. My tools of choice include Avid Media Composer and Adobe Premier Pro.<br /><br />Outside of work I get my hands dirty with wood/metal work and custom-built antique revivals. Take a look at my credit list and contact me below.</p>
        {/* <p>Senior Editor and Producer for Television with over 20 years of experience in the Post-Production process.<br /><br />Integrates narrative vision, technical aptitude, and creativity under pressure to lead teams in crafting effective stories.</p> */}
      </div>
      <div className="width30">
        <img className="facepic" src={headshot} />
      </div>
    </div>
  )
}

export default About;
