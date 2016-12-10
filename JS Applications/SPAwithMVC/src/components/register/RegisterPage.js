import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../models/user';
import observer from '../../models/observer';

class RegisterPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            repeatpass:''
        };
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onSubmitHandler=this.onSubmitHandler.bind(this);
        this.onRegisterSuccess=this.onRegisterSuccess.bind(this);
    }
    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }
    onSubmitHandler(event){
        event.preventDefault();
        register(this.state.username, this.state.password, this.onRegisterSuccess);
    }
    onRegisterSuccess(result){
        observer.onSessionUpdate();
    }

    render(){
        return(
            <div>
                <h1>Register Page</h1>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    repeatpass={this.state.repeatpass}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                />
            </div>
        );
    }
}
export default RegisterPage;