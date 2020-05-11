import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function About() {

    return (
      <div id="aboutDiv">
      <h2>emma</h2>
      <p className="aboutParagraph">/emə/</p>
      <FontAwesomeIcon icon={faUserCircle} style={{color:'#1A4790',position:"relative",left:"-65px", top:"-70px", fontSize:"3em"}} />
      <p className="aboutParagraph" id="nounParagaph">Noun</p>
      <p className="aboutParagraph" id="definitionParagraph">a full-fledged Computer Science & Mathematics geek with a graphic
      design love affair who is always seeking opportunities to enhance her knowledge and skills
      </p>
      <div id="ornamentalDiv"></div>
      <div id="ornamentalDiv2"></div>
      <div id="ornamentalDiv3"></div>
      </div>
  )

}

export default About;
