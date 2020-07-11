import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Store from './components/Store.js';
import AddNewProduct from './components/AddNewProduct.js';
import UpdateProduct from './components/UpdateProduct.js';
import ManageUser from './components/ManageUser.js';
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import Admin from './components/Admin.js';
import './App.css';



export default class App extends Component {

  history = createBrowserHistory();





  render() {
    return (
      <Router history={this.history}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/register" component={Register}/>
            <Route exact path="/" component={Login} />
            <Route path="/store" component={Store}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/admin/newProduct" component={AddNewProduct}/>
            <Route path="/admin/update" component={UpdateProduct}/>
            <Route path="/admin/manage-user" component={ManageUser}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
