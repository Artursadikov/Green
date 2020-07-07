import React, { Component } from 'react'

export default class UpdateProduct extends Component {
    render() {
        return (
            <form className="container Admin">
                <h2 className="AdminHeader">Admin (add prodoct to shop)</h2>
                <div className="form-group ">
                    <div className="form-group">
                        <label>Category list:</label>
                        <select className="form-control">
                            <option>Fruit</option>
                            <option>Vegetables</option>
                            <option>Bread</option>
                            <option>Meat</option>
                            <option>Fish</option>
                        </select>
                    </div>
                </div>
                <button type="button" className="AdminSubmitBtn">Search</button>
                <div className="productListDiv">
                    <ul className="productUlAdnim">
                        <li>product place holder</li>
                    </ul>
                </div>
            </form>
        )
    }
}
