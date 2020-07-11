import React, { Component } from 'react';
import '../Styles/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
class Product extends Component {

    state = {
        counter: 0,
        desc: this.props.Desc,
        descArea: false
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

    getDescription = () => {
        this.setState({
            descArea: !this.state.descArea
        })
    }

    render() {

console.log(this.state.desc)
        return (

            <div className='product-Box'>
                <p className="productNameP">{this.props.productName}</p>
                <div className='row img'>
                    {
                        this.state.descArea ? <p className="decsriptionProd">{this.state.desc}</p> :
                        this.props.image
                    }
                   
                </div>
                <div className='description'>
                    <p className='pricePerItem'>{this.props.price}$ (per Item/Kg)</p>
                    <h2 className='calculatedPrice'>{this.props.price * this.state.counter}$</h2>
                    <button onClick={this.getDescription} type="button" className="descBtn">Description</button>
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