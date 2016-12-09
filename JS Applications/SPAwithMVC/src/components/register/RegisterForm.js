import React, {Component} from 'react';

class RegisterForm extends Component{

    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
               <label>
                   Username
               </label>
                <input className="form-control"
                       type="text"
                       name="username"
                       value={this.props.username}
                       onChange={this.props.onChange}/>
                </div>
                <div className="form-group">
                <label>
                    Password
                </label>
                <input className="form-control"
                        type="password"
                       name="password"
                       value={this.props.password}
                       onChange={this.props.onChange}/>
                </div>
                <div className="form-group">
                <label>
                    Repeat password
                </label>
                <input className="form-control"
                        type="password"
                       name="repeatpass"
                       value={this.props.repeatpass}
                       onChange={this.props.onChange}/>
                </div>
                <input type="submit" value="Register" className="btn btn-default"/>
            </form>
        );
    }
}
export default RegisterForm;