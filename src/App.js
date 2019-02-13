import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Linux Gurus.....!!!!!1111
          </p>
          <a
            className="App-link"
            href="https://www.vishalvyas.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           Click here to enter Linux world.. :)
          </a>
        </header>
      </div>
    );
  }
}

export default App;
