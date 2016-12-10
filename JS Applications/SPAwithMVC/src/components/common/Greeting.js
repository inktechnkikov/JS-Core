import React, {Component} from 'react';

class Greeting extends Component{
    render() {
        if (!this.props.loggedIn) {
            return null;
        }
        else {
            return (
                <span>Welcome, {this.props.username}</span>
            );
        }
    }
}
export default Greeting;