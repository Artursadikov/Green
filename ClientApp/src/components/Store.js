import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';
import '../Styles/Store.css';



class Store extends Component {

    state = {
        openSidebar: true,
        data: []
    }

    categoryBtn = () => {
        this.setState({ openSidebar: !this.state.openSidebar })
    }

    componentDidMount() {

        axios.get(`api/Products/all`).then(res => {
            this.setState({
                data: res.data.data
            })
        })

    }

    filterByAll = () => {
        axios.get(`api/Products/all`).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    filterByFruit = () => {
        axios.get(`api/Products/category/Fruit`).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    filterByVegetables = () => {
        axios.get(`api/Products/category/Vegetables`).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    filterByBread = () => {
        axios.get(`api/Products/category/Bread`).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    filterByMeat = () => {
        axios.get(`api/Products/category/Meat`).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    filterByFish = () => {
        axios.get(`api/Products/category/Fish`).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    render() {

        let sidebar = this.state.openSidebar;
        let products = this.state.data;

        let AllProducts = products.map(prod => {
            return (<Product
                key={prod.id}
                Desc={prod.description}
                image={prod.imagePthUrl}
                price={prod.price}
                productName={prod.productName}
                category={prod.category}

            />)
        })


        return (
            <div className="storeDivContainer">
                <div className="containerBody">
                    <div className="row">
                        <div className={sidebar ? 'category2' : 'category'}>
                            <ul className={sidebar ? 'categoryUl2 ' : 'categoryUl'}>
                                <li onClick={this.filterByAll} className="categoryLi">All Products</li>
                                <li onClick={this.filterByFruit} className="categoryLi">Fruit</li>
                                <li onClick={this.filterByVegetables} className="categoryLi">Vegetables</li>
                                <li onClick={this.filterByBread} className="categoryLi">Bread</li>
                                <li onClick={this.filterByMeat} className="categoryLi">Meat</li>
                                <li onClick={this.filterByFish} className="categoryLi">Fish</li>
                            </ul>
                        </div>
                        <div className={sidebar ? 'grocery2' : 'grocery'}>
                            <div className='row pr-box'>
                                {
                                    products.length <= 0 ?
                                        <h1>No Products Found!</h1>
                                        :
                                        AllProducts
                                }
                            </div>
                            <button onClick={this.categoryBtn} className='openCategoryBtn'><span>CATEGORY</span></button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Store;