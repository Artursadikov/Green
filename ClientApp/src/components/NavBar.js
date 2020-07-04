import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">Green<small>   you'r grocery shop!</small></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <NavLink className="nav-link" activeClassName="selected" to="/Store">Store</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/logout">LogOut</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/admin">Admin</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
