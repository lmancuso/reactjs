import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Contenido from './Contenido.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <Header />

      <Contenido />
        
      </div>
    );
  }
}

export default App;
