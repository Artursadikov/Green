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

    render() {

        let sidebar = this.state.openSidebar;
        let products = this.state.data;

        let AllProducts = products.map(prod => {
            return (<Product
                key={prod.id}
                description={prod.description}
                image={prod.imagePthUrl}
                price={prod.price}
                productName={prod.productName}
                category={prod.category}
            />)
        })
        console.log(products)

        return (
            <div className="storeDivContainer">
                <div className="containerBody">
                    <div className="row">
                        <div className={sidebar ? 'category2' : 'category'}>
                            <ul className={sidebar ? 'categoryUl2 ' : 'categoryUl'}>
                                <li className="categoryLi">Fruit</li>
                                <li className="categoryLi">Vegetables</li>
                                <li className="categoryLi">Bread</li>
                                <li className="categoryLi">Meat</li>
                                <li className="categoryLi">Fish</li>
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