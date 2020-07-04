import React, { Component } from 'react';
import Product from './Product';
import '../Styles/Store.css';



class Store extends Component {

    state = {
        openSidebar: true
    }

    categoryBtn = () => {
        this.setState({ openSidebar: !this.state.openSidebar })
    }


    render() {

        let sidebar = this.state.openSidebar;


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
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                            <button onClick={this.categoryBtn} className='openCategoryBtn'><span>CATEGORY</span></button>
                            <button className='addToCartBtn'><span>ADD TO CART</span></button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Store;