import React, { useState } from "react";
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Delete from "../../assets/Icon/delete.png";
import Edit from "../../assets/Icon/pencil.png";
import { Link } from "react-router-dom";
import axios from 'axios';

function OrderForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    district: '',
    deliveryAddress: '',
    quantity: '',
    packSize: ''
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/order', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 201) {
        console.log('Order created:', response.data);
      } else {
        console.error('Failed to create order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row >
        <Col style={{ display: "flex", justifyContent: "center", fontSize: "35px", fontWeight: "bold" }}>
          <Form.Label>Online Ordering Form</Form.Label>
        </Col>
      </Row>
      {['fullName', 'emailAddress', 'phoneNumber', 'district', 'deliveryAddress', 'quantity', 'packSize'].map((field, index) => (
        <Form.Group controlId={`formBasic${field}`} key={index}>
          <Row>
            <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
              <Form.Label>{field.replace(/([A-Z])/g, ' $1').trim()} :</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" placeholder={`Enter your ${field}`} name={field} value={formData[field]} onChange={handleChange} />
            </Col>
            <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
              <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight: "25px" }} />
              <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
            </Col>
          </Row>
        </Form.Group>
      ))}
      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/carddetails"> 
          <Button variant="outline-primary" type="submit">
            Check Out
          </Button>
          </Link>
        </Col>
      </Row>
    </Form>
  );
}

export default OrderForm;
