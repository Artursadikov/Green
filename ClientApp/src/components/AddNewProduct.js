import React, { Component } from 'react';
import axios from 'axios';

export default class AddNewProduct extends Component {

    state = {
        prodNameVal: '',
        priceVal: '',
        descriptionVal: '',
        imagePathVal: '',
        seletCategoryVal: 'Fruit'
    }

    prodNameHandler = (e) => {
        this.setState({
            prodNameVal: e.target.value
        })
    }

    priceHandler = (e) => {
        this.setState({
            priceVal: e.target.value
        })
    }

    descriptionHandler = (e) => {
        this.setState({
            descriptionVal: e.target.value
        })
    }

    imagePathHandler = (e) => {
        this.setState({
            imagePathVal: e.target.value
        })
    }

    selectCategoryHandler = (e) => {
        this.setState({
            seletCategoryVal: e.target.value
        })
    }


    postProduct = () => {
        axios.post(`api/Products`, {
            productName: this.state.prodNameVal,
            description: this.state.descriptionVal,
            price: parseFloat(this.state.priceVal),
            imagePthUrl: this.state.imagePathVal,
            category: this.state.seletCategoryVal
         
        }).then(res => {
            this.setState({
                prodNameVal: '',
                priceVal: '',
                descriptionVal: '',
                imagePathVal: '',
                seletCategoryVal: ''
            })
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <form className="container Admin">
                <h2 className="AdminHeader">Admin (add prodoct to shop)</h2>
                <div className="form-group ">
                    <div className="form-group">
                        <label>Category list:</label>
                        <select value={this.state.seletCategoryVal} onChange={(e) => this.selectCategoryHandler(e)} className="form-control">
                            <option>Fruit</option>
                            <option>Vegetables</option>
                            <option>Bread</option>
                            <option>Meat</option>
                            <option>Fish</option>
                        </select>
                    </div>
                </div>
                <div className="form-group ">
                    <label>Product name</label>
                    <input value={this.state.prodNameVal} onChange={(e) => this.prodNameHandler(e)} type="text" className="form-control" />
                </div>
                <div className="form-group ">
                    <label >Price</label>
                    <input value={this.state.priceVal} onChange={(e) => this.priceHandler(e)} type="text" className="form-control" />
                </div>
                <div className="form-group ">
                    <label >Description</label>
                    <input value={this.state.descriptionVal} onChange={(e) => this.descriptionHandler(e)} type="text" className="form-control" />
                </div>
                <div className="form-group ">
                    <label >Image path</label>
                    <input value={this.state.imagePathVal} onChange={(e) => this.imagePathHandler(e)} type="text" className="form-control" />
                </div>
                <button onClick={this.postProduct} type="button" className="AdminSubmitBtn">Submit</button>
            </form>

        )
    }
}
