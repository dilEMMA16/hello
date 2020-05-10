import React from 'react';
import logo from './logo_logo.svg';
import './App.css';
import Menu from './components/Menu';
import About from './components/About';

function App() {

  return (
    <div className="App">
      <Menu/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          emma schreifels
        </h1>
        <p>
          --&#62; i curiously create &#60;--
        </p>
      </header>
      <About/>
    </div>
  );
}

export default App;
