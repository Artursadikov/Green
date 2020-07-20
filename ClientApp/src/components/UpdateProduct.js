import React, { Component } from 'react';
import '../Styles/UpdateProduct.css';
import ProductListAdmin from './ProductListAdmin';
import Modal from "../Modal/Modal";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class UpdateProduct extends Component {

    state = {
        data: [],
        selectVal: 'Fruit',
        showModal: false,
        id: null,
        name: '',
        price: 0,
        imgPath: '',
        error: null

    }



    selectHandler = (e) => {
        this.setState({
            selectVal: e.target.value
        })
    }



    nameHandler = (e) => { this.setState({ name: e.target.value }) }
    priceHandler = (e) => { this.setState({ price: e.target.value }) }
    imgPathHandler = (e) => { this.setState({ imgPath: e.target.value }) }

    getApiByCategory = () => {
        let category = this.state.selectVal;

        axios.get(`api/Products/category/${category}`).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    deleteProdOpenModal = (id) => {
        this.setState({
            id: id,
            showModal: !this.state.showModal
        })
    }

    deleteProduct = () => {
        let category = this.state.selectVal;
        let id = this.state.id;

        axios.delete(`api/Products/${id}`).then(res => {
            this.setState({
                showModal: !this.state.showModal
            })
            axios.get(`api/Products/category/${category}`).then(res => {
                this.setState({
                    data: res.data.data
                })
            })
        }).catch(err => console.log(err))
    }

    cancelDelProduct = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    okUpdate = (id, category, description) => {
        axios.put(`api/Products/${id}`, {
            id: id,
            productName: this.state.name,
            imagePthUrl: this.state.imgPath,
            price: parseInt(this.state.price),
            description: description,
            category: category
        }).then(() => {
            this.props.history.push('/store');
        }).catch(err => {
            this.setState({ error: err })
          
        })
    }


    render() {

        let products = this.state.data.map(prod => {
            return (<ProductListAdmin
                key={prod.id}
                productId={prod.id}
                productImg={prod.imagePthUrl}
                productPrice={prod.price}
                productName={prod.productName}
                category={prod.category}
                description={prod.description}
                okUpdate={(id, category, description) => this.okUpdate(prod.id, prod.category, prod.description)}
                nameHandler={(e) => this.nameHandler(e)}
                priceHandler={(e) => this.priceHandler(e)}
                imgPathHandler={(e) => this.imgPathHandler(e)}
                deleteProduct={(id) => this.deleteProdOpenModal(prod.id)}


            />)
        })


        return (
            <form className="container Admin">
                <h2 className="AdminHeader">Admin (Update Product)</h2>
                <div className="form-group ">
                    <div className="form-group">
                        <label>Category list:</label>
                        <select onChange={(e) => this.selectHandler(e)} value={this.state.selectVal} className="form-control">
                            <option>Fruit</option>
                            <option>Vegetables</option>
                            <option>Bread</option>
                            <option>Meat</option>
                            <option>Fish</option>
                        </select>
                    </div>
                    <Modal show={this.state.showModal}>
                        <div className="modalDelDealogBox">
                            <h4>Are You Sure ?</h4>
                            <button onClick={this.deleteProduct} type="button" className="del">Delete</button>
                            <button onClick={this.cancelDelProduct} type="button" className="can">Cancel</button>
                        </div>
                    </Modal>
                </div>
                <button onClick={this.getApiByCategory} type="button" className="AdminSubmitBtn">Search</button>
                <div className="productListDiv">
                    <ul className="productUlAdnim">
                        {products}
                    </ul>
                </div>
            </form>
        )
    }
}
export default withRouter(UpdateProduct);