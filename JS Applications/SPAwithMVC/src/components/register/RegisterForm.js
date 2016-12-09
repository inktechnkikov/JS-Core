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
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }
    onSubmitHandler(event){
        event.preventDefault();
        alert('Submited');
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.repeatpass);
    }
    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
               <label>
                   Username
               </label>
                <input className="form-control"
                        type="text"
                       name="username"
                       value={this.state.username}
                       onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                <label>
                    Password
                </label>
                <input className="form-control"
                        type="password"
                       name="password"
                       value={this.state.password}
                       onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                <label>
                    Repeat password
                </label>
                <input className="form-control"
                        type="password"
                       name="repeatpass" value={this.state.repeatpass}
                       onChange={this.onChangeHandler}/>
                </div>
                <input type="submit" value="Register" />
            </form>
        );
    }
}
export default RegisterForm;