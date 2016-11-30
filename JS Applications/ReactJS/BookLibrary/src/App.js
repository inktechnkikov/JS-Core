import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <NavigationBar/>
          <div id="error-box">Error messgaes</div>
          <div id="info-box">Info messages</div>
          <div id="load-box">Load messges</div>
        </header>
      <div id="main">
        App view
      </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
