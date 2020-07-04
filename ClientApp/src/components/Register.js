import React, { Component } from 'react';
import '../Styles/Register.css';


class Register extends Component {
    render() {
        return (
            <form className="container form register">
                <h2 className="loginHeader">Register</h2>
                <div className="form-group ">
                    <label >Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group ">
                    <label >Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="button" className="loginSubmitBtn">Submit</button>
            </form>
        );
    }
}

export default Register;