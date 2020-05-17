import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AboutDiv, AboutParagraph, NounParagraph, DefinitionParagraph, OrnamentalDivBlue, OrnamentalDivGreen, OrnamentalDivRed } from './AboutStyles';

function About() {

    return (
      <AboutDiv>
      <h2>emma</h2>
      <AboutParagraph>/emə/</AboutParagraph>
      <FontAwesomeIcon icon={faUserCircle} style={{color:'#1A4790',position:"relative",left:"-65px", top:"-70px", fontSize:"3em"}} />
      <NounParagraph id="nounParagaph">Noun</NounParagraph>
      <DefinitionParagraph>a full-fledged Computer Science & Mathematics geek with a graphic
      design love affair who is always seeking opportunities to enhance her knowledge and skills
      </DefinitionParagraph>
      <OrnamentalDivBlue/>
      <OrnamentalDivRed/>
      <OrnamentalDivGreen/>
      </AboutDiv>
  )

}

export default About;
