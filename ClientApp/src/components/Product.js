import React, { Component } from 'react';
import '../Styles/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
class Product extends Component {

    state = {
        counter: 0
    }

    getCounter = (e) => {
        this.setState({ counter: e.target.value });
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
                <p className="productNameP">{this.props.productName}</p>
                <div className='row img'>
                   {this.props.image}
                 </div>
                <div className='description'>
                    <h2>{this.props.price * this.state.counter}$</h2>
                    <p className="productDescP">{this.props.description}</p>
                </div>

                <div className='itemsBtn'>
                    <FontAwesomeIcon onClick={this.addCounter} icon={faPlusCircle} className="add" />
                    <input value={this.state.counter} onChange={(e) => this.getCounter(e)} type="text" className="counter-items" />
                    <FontAwesomeIcon onClick={this.subtractCounter} icon={faMinusCircle} className="remove" />
                    <button className="addProductToCart">Add</button>
                </div>
            </div>

        );
    }
}

export default Product;