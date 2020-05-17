import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AboutDiv, AboutParagraph, NounParagraph, DefinitionParagraph, OrnamentalDivBlue, OrnamentalDivGreen, OrnamentalDivRed, ProfileIcon } from './AboutStyles';

function About() {

    return (
      <AboutDiv id="about">
      <h2>emma</h2>
      <AboutParagraph>/emə/</AboutParagraph>
      <ProfileIcon icon={faUserCircle}  />
      <NounParagraph>Noun</NounParagraph>
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
