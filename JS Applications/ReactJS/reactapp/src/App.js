import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
            <Header/>
        <p className="App-intro">
         Hello ReactJS
        </p>
          <div>
          <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
