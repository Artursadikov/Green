import React, { Component } from 'react';
import '../Styles/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
class Product extends Component {

    state = {
        counter: 0,
        pricePerProduct: 0 + "$"
    }

    getCounter = (e) => {
        this.setState({ counter: e.target.value });
    }

    PriceValHandler=(e)=>{

        // get price from DB
        this.setState({ pricePerProduct: e.target.value });
    }

    addCounter = () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }))
    }


    subtractCounter = () => {
        if (this.state.counter > 0) {
            this.setState(prevState => ({ counter: prevState.counter - 1 }))
        }
    }

    render() {


        return (
            <div className='product-Box'>
                <div className='row img'>
                    imp palaceholder
                 </div>
                <div className='description'>
                    <input value={this.state.pricePerProduct} onChange={(e)=>this.PriceValHandler(e)} type='text' palaceholder="price: 0$" className='input_price' />
                </div>

                <div className='itemsBtn'>
                    <FontAwesomeIcon onClick={this.addCounter} icon={faPlusCircle} className="add" />
                    <input value={this.state.counter} onChange={(e) => this.getCounter(e)} type="text" className="counter-items" />
                    <FontAwesomeIcon onClick={this.subtractCounter} icon={faMinusCircle} className="remove" />
                </div>
            </div>
        );
    }
}

export default Product;