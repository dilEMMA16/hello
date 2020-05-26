import React from 'react';
import logo from './logo_logo.svg';
import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import { AppDiv, AppHeader, AppLogo, AppHeading, ParagraphRed } from './AppStyles';
import Work from './components/Work';
import Code from './components/Code';
import Design from './components/Design';
import Contact from './components/Contact';

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
