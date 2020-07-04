import React, { Component } from 'react';

import '../Styles/Login.css';

export default class Login extends Component {
    render() {
        return ( 
            <form className="container form">
                <h2 className="loginHeader">Login</h2>
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

        )
    }
}
