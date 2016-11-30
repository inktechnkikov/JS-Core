import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import ReactDOM from 'react-dom';
import Home from './Views/Home';
import Login from './Views/Login';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId:sessionStorage.getItem("userId")
        };
    }
  render() {
    return (
      <div className="App">
        <header>
        <NavigationBar
            username = {this.state.username}
            homeClicked={this.showHomeView.bind(this)}
            loginClicked={this.showLoginView.bind(this)}
            />
          <div id="errorbox">Error messgaes</div>
          <div id="infobox">Info messages</div>
          <div id="loadbox">Load messges</div>
        </header>
      <div id="main">
        App view
      </div>
      <Footer/>
      </div>
    );
  }
  showView(reactComponent){
        ReactDOM.render(
            reactComponent,
            document.getElementById('app')
        );
  }
  showHomeView(){
      this.showView(<Home/>)
  }
  showLoginView(){
      this.showView(<Login/>)
  }
 }

//export default App;
