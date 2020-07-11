import React, { Component } from 'react';
import '../Styles/ProductListAdmin.css';

export default class ProductListAdmin extends Component {
    render() {
        return (
            <li className="LiAdminProduct">
                <p><span>Name</span> {this.props.productName}</p>
                <p><span>Id</span> {this.props.productId}</p>
                <p><span>Price</span> {this.props.productPrice}$</p>
                <p><span>Image Path</span> {this.props.productImg}</p>
                <button type="button" onClick={this.props.deleteProduct} className="prodDelete">DEL</button>
            </li>

        )
    }
}
