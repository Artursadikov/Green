import React, { Component } from 'react';
import '../Styles/Admin.css';



export default class Admin extends Component {
    render() {
        return (
            <form className="container Admin">
                <h2 className="AdminHeader">Admin (add prodoct to shop)/(manage user)</h2>
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
                <div className="form-group ">
                    <label>Product name</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="form-group ">
                    <label >Price</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="form-group ">
                    <label >Description</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="form-group ">
                    <label >Image path</label>
                    <input type="text" className="form-control"  />
                </div>
                <button type="button" className="AdminSubmitBtn">Submit</button>
            </form>

        )
    }
}
