import React from 'react';
import './CowParent.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function GoatParent() {
    return (
        <div className="container my-5">
            <div className="login-container">
                <h1 className="text-center" style={{padding:'10px'}}>Information Form</h1>
                <h2 className="text-center">(Goat)</h2>

                <br/><br/>

                <div className="form-group">
                    <label className="form-label">Quantity:</label>
                    <input className="form-control" type="text"/>
                </div>

                <br/>

                <div className="form-group">
                    <label className="form-label">Range of the age:</label>
                    <select className="form-control">
                        <option value="child">Day 01-3 months</option>
                        <option value="parent">More than 3 months</option>
                    </select>
                </div>

                <br/><br/>

                <div className="text-center">
                    <Button className="custom-btn-text-black mx-2" variant="primary" size="md" disabled>
                        Clear
                    </Button>
                    <Button className="custom-btn-text-black mx-2" variant="primary" size="md" disabled>
                        Update
                    </Button>
                    <Button className="custom-btn-text-black mx-2" variant="primary" size="md" disabled>
                        Submit
                    </Button>
                </div>

                <br/><br/><br/><br/>
            </div>
        </div>
    );
}

export default GoatParent;
