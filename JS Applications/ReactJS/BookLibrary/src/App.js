import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import ReactDOM from 'react-dom';
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId:sessionStorage.getItem("userId")
        };
    }
        componentDidMount(){
        //Atach global AJAX "loading" events
        $(document).on({
            ajaxStart: function () {
                $("#loadbox").show()
            },
            ajaxStop:function () {
                $("#loadbox").hide()
            }
        });
        this.showHomeView();
        //Atach a global Ajax error evnt hadler
            $(document).ajaxError(
                this.handleAjaxError.bind(this)
            );
        }
        handleAjaxError(event,response){
            let errorMsg = JSON.stringify(response);
            if(response.readyState === 0){
                errorMsg="Cannot connect due to network error";
            }
            if(response.responseJSON && response.responseJSON.description){
                errorMsg=response.responseJSON.description;
            }
            this(errorMsg);
        }
        showInfo(message){
            $("#infobox").text(message).show();
            setTimeout(function () {
                $("#infobox").fadeOut();
            }, 3000);
        }
        showError(errorMsg){
            $("#errorbox").text("Error" + errorMsg).show();
        }

  render() {
    return (
      <div className="App">
        <header>
        <NavigationBar
            username = {this.state.username}
            homeClicked={this.showHomeView.bind(this)}
            loginClicked={this.showLoginView.bind(this)}
            registerClicked={this.showRegisterView.bind(this)}
            booksClicked={this.showBooksView.bind(this)}
            creteBookClicked={this.showCreateBookView.bind(this)}
            logoutClicked={this.logout.bind(this)}
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
            document.getElementById('main')
        );
        $("#errorbox").hide();
  }
  showHomeView(){
      this.showView(<Home username={this.state.username}/>);
  }
  showLoginView(){
      this.showView(<Login onsubmit ={this.login}/>);
      this.setState({username:"sfdf"});
  }
  login(username,password){
      alert("user: " + username + " " + "pass: " + password);
  }
  showRegisterView(){
    this.showView(<Register/>);
  }
  showBooksView(){

  }
  showCreateBookView(){

  }
  logout(){
    this.setState(
        {username: null}
    );
  }
 }

//export default App;
