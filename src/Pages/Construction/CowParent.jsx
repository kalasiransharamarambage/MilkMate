import React from 'react';
import './CowParent.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function CowParent() {
    return (
        <div className="container mt-5">
            <div className="login-container text-center">
                <h1 className="h1" style={{ padding: '50px' }}>Information Form</h1>
                <h2 className="h2">(Cow)</h2>

                <br /><br />

                <div className="div2 p-3 border rounded">

                    <div className="mb-3 text-start">
                        <label className="form-label">Quantity:</label>
                        <input type="number" className="form-control" />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label">Range of the age:</label>
                        <select className="form-select">
                            <option value="child">Day 01-6 months</option>
                            <option value="parent">More than 6 months</option>
                        </select>
                    </div>

                    <div className="ActionButtons d-flex justify-content-center flex-wrap">
                        <Button className="custom-btn-text-black btn btn-primary m-2" size="md" disabled>
                            Clear
                        </Button>
                        <Button className="custom-btn-text-black btn btn-primary m-2" size="md" disabled>
                            Update
                        </Button>
                        <Button className="custom-btn-text-black btn btn-primary m-2" size="md" disabled>
                            Submit
                        </Button>
                    </div>

                    <br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
    );
}

export default CowParent;
