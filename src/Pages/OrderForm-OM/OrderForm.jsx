import React from "react";
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Delete from "../../assets/Icon/delete.png";
import Edit from "../../assets/Icon/pencil.png";
import {Link} from "react-router-dom";

function OrderForm() { // Corrected component name to follow standard naming conventions
  return (
    <Form>
      <Row> 
        <Col style={{ display: "flex", justifyContent: "center" , fontSize: "35px" ,fontWeight: "bold" }}> 
          <Form.Label>Online Ordering Form</Form.Label>
        </Col>
      </Row>
      <Form.Group controlId="formBasicEmail">
        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Full Name :</Form.Label>
          </Col>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Enter your name" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>

        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Email Address :</Form.Label>
          </Col>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Enter your address" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>

        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Phone Number :</Form.Label>
          </Col>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Enter your phonenumber" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>

        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>District :</Form.Label>
          </Col>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Enter your district" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>

        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Delivery Address :</Form.Label>
          </Col>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Enter your delivery address" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>

        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Quantity :</Form.Label>
          </Col>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Enter your quantity" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>

        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Pack Size :</Form.Label>
          </Col>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Enter your pack size" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>
      </Form.Group>

      {/* Repeat the Form.Group code for other form fields */}

      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Link to='/carddetails'>
          <Button variant="outline-primary" type="submit">
            Check Out
          </Button></Link>
        </Col>
      </Row>
    </Form>
  );
}

export default OrderForm;
