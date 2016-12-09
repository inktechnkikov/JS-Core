import React, {Component} from 'react';

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
          username:'',
            password:'',
            repeatpass:''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)

    }
    render(){
        return(
            <form>
               <label>
                   Username
               </label>
                <input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler.bind(this)}/>
                <label>
                    Password
                </label>
                <input type="password" name="password" value={this.state.password}/>
                <label>
                    Repeat password
                </label>
                <input type="password" name="repeatpass" value={this.state.repeatpass}/>
            </form>
        );
    }
}
export default RegisterForm;