import React, { Component } from 'react';


import '../Styles/ProductListAdmin.css';

class ProductListAdmin extends Component {

    state = {
        updateClicked: false
    }

    updateFilds = () => {
        this.setState({
            updateClicked: !this.state.updateClicked
        })

    }

    render() {


        let update = this.state.updateClicked;



        return (

                <li className="LiAdminProduct">
                    <p>
                        <span>Name  </span>
                        {
                            !update ? this.props.productName :
                                < input type="text" value={this.props.name} onChange={this.props.nameHandler} placeholder={this.props.productName} />}
                    </p>
                    <p>
                        {
                            !update ? <span> Id</span> : null} {!update ? this.props.productId :
                                <span style={{ display: 'block' }}>
                                    <span>Id  </span>{this.props.productId}</span>}
                    </p>
                    <p>
                        <span>Price  </span> {
                            !update ? this.props.productPrice + "$" :
                                <input type="text" value={this.props.price} onChange={this.props.priceHandler} placeholder={this.props.productPrice + "$"} />}
                    </p>
                    <p>
                        <span>Image Path  </span> {
                            !update ? this.props.productImg :
                                <input type="text" value={this.props.imgPath} onChange={this.props.imgPathHandler} placeholder={this.props.productImg} />}
                    </p>

                    <button type="button" onClick={this.props.deleteProduct} className="prodDelete">Del</button>
                    {
                        !update ?
                            <button type="button" onClick={this.updateFilds} className="prodUpdate">Update</button>
                            :

                    <button type="button" onClick={this.props.okUpdate} className="prodUpdate">Ok</button>
                    }

                </li>

        )
    }
}
export default ProductListAdmin;