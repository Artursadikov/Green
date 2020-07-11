import React, { Component } from 'react';
import AddNewProduct from './AddNewProduct';
import ManageUser from './ManageUser';
import UpdateProduct from './UpdateProduct';
import { withRouter } from 'react-router-dom';
import '../Styles/Admin.css';



 class Admin extends Component {

    state = {
        status: ''
    }



    newProductComponent = () => {
        this.setState({
            status: "newProduct"
        })

    }
    updateProductComponent = () => {
        this.setState({
            status: "updateProduct"
        })

    }
    manageUserComponent = () => {
        this.setState({
            status: "manageUser"
        })

    }

    loadComponent = () => {
        let componentToLoad = this.state.status;

        if (componentToLoad === "newProduct") {
            return <AddNewProduct />
        } else if (componentToLoad === "updateProduct") {
            return <UpdateProduct />
        } else if (componentToLoad === "manageUser") {
            return <ManageUser />
        } else {
            return <AddNewProduct />
        }

    }
        render() {



            return (
                <div>
                    <div className="manageBtnDiv">
                        <button onClick={this.newProductComponent} className="manageAdminBtns">Add New a Product</button>
                        <button onClick={this.updateProductComponent} className="manageAdminBtns">Update Product</button>
                        <button onClick={this.manageUserComponent} className="manageAdminBtns">Manage Users</button>
                    </div>
                    {this.loadComponent()}
                </div>

            )
        }
    }
    export default withRouter(Admin);