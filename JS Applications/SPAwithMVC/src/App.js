import React, { Component } from 'react';
import Header from './components/common/Header';
import {Link} from 'react-router';
import observer from './models/observer';
import Greeting from './components/common/Greeting';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: ''
        };
        this.onSessionUpdate = this.onSessionUpdate.bind(this);
    }
    componentDidMount() {
        observer.onSessionUpdate = this.onSessionUpdate;
        this.checkUserCredentials();
    }
    onSessionUpdate() {
        this.checkUserCredentials();
    }
    checkUserCredentials() {
        let username = sessionStorage.getItem('username');
        if (!username) {
            this.setState({
                loggedIn: false
            })
        }
        else {
            this.setState({
                loggedIn: true,
                username: username
            })
        }
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <div className="container">
                  <Header>
                    <Link to="/" className="btn btn-default">Home</Link>
                    <Link to="/catalog" className="btn btn-default">Catalog</Link>
                    <Link to="/about" className="btn btn-default">About</Link>
                    <Link to="/logout" className="btn btn-default">Logout</Link>
                    <Greeting username={this.state.username} loggedIn={this.state.loggedIn}/>
                  </Header>
                    {this.props.children}
                </div>
            )
        }
        else {
            return (
                <div className="container">
                  <Header>
                    <Link to="/" className="btn btn-default">Home</Link>
                    <Link to="/about" className="btn btn-default">About</Link>
                    <Link to="/register" className="btn btn-default">Register</Link>
                    <Greeting username={this.state.username} loggedIn={this.state.loggedIn}/>
                  </Header>
                    {this.props.children}
                </div>
            );
        }
    }
}
export default App;
