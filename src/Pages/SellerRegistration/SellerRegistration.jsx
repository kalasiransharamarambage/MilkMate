// src/VendorRegistrationForm.js
import React, { useState } from 'react';
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import milkproducts from "../../assets/Img/milkproducts.jpg";
import Form from "react-bootstrap/Form";
import axios from 'axios';

const VendorRegistrationForm = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        address1: '',
        address2: '',
        city: '',
        region: '',
        postalCode: '',
        country: 'United States',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        mobilePhone: '',
        emailAddress: '',
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/register', formData);
            if (response.status === 201) {
                alert('Registration successful!');
            } else {
                alert('Registration failed!');
            }
        } catch (error) {
            alert('Registration failed!');
        }
    };

    return (
       
           
            <Row>
              <Col md={6}>
                <Image 
                  src={milkproducts} 
                  alt="Milk products" 
                  style={{ width: "100%", height: "auto", borderRadius: "10px" }} 
                />
              </Col>
              <Col md={6}>
                <h2 className="text-center mb-4" style={{ fontSize: "30px", color: "#0B4EFC", fontFamily: "Arial, sans-serif" }}>
                  Seller Registration
                </h2>
        <form onSubmit={handleSubmit}>
          
            <label>
          
                Business Name:
                
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
              
                </label><br/>
           
            <label>
                Address:
                <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />
            </label><br />
           
            <label>
                City:
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </label><br />
            <label>
                Region:
                <input type="text" name="region" value={formData.region} onChange={handleChange} required />
            </label><br />
           
            <label>
                Country:
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </label><br />
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label><br />
            <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label><br />
            <label>
                Phone Number:
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </label><br />
            <label>
                Mobile Phone:
                <input type="text" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} required />
            </label><br />
            <label>
                Email Address:
                <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
            </label><br />
            <label>
                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
                I agree to <a href="#">Terms of Service</a>
            </label><br />
            <button type="submit">Send Application</button>
        </form>
        </Col>
            </Row>
         
      
       
    );
};

export default VendorRegistrationForm;
