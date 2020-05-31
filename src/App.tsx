import React from 'react';
import logo from './logo_logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About';
import { AppDiv, AppHeader, AppLogo, AppHeading, ParagraphRed } from './AppStyles';
import Work from './Work';
import Code from './Code';
import Design from './Design';
import Contact from './Contact';

function App() {

  return (
    <AppDiv>
      <Menu/>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppHeading>
          emma schreifels
        </AppHeading>
        <ParagraphRed>
          --&#62; i curiously create &#60;--
        </ParagraphRed>
      </AppHeader>
      <About/>
      <Work/>
      <Code/>
      <Design/>
      <Contact/>
    </AppDiv>
  );
}

export default App;
