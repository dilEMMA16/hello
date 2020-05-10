import React from 'react';
import logo from './logo_logo.svg';
import './App.css';
import Menu from './components/Menu';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          emma schreifels
        </h1>
        <p>
          --&#62; i curiously create &#60;--
        </p>
      </header>
    </div>
  );
}

export default App;
