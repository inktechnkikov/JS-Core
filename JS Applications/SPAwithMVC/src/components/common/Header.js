import React, { Component } from 'react';
import Greeting from './Greeting';
class Header extends Component {
    render(){
        return(
        <div className="jumbotron">
            <h1>Team manager</h1>
            <Greeting username = {this.props.username}/>
            <div>
                {this.props.children}
            </div>
        </div>
        );
    }
}
export default Header;