import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
        <div>
            <h1>Team manager</h1>
            <div>
                {this.props.children}
            </div>
        </div>
        );
    }
}
export default Header;