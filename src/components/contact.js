import React from 'react';
import resume from '../../images/Brian Forbes Resume 2018.pdf';

function Contact() {
  return (
      <div className="contact">
        <h3>| contact |</h3>
        <p>Email or call me to discuss your project.</p><br />
        <a className="email-me" href="mailto:brianforbescreative@gmail.com">brianforbescreative@gmail.com</a>
        <h5>818 438 0216</h5>
        <a href={resume} target="_blank">Resume</a>
      </div>
    )
  }


export default Contact;
