import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
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
    }
    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }
    onSubmitHandler(event){
        event.preventDefault();

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