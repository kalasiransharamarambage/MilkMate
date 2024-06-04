import React from "react";
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Delete from "../../assets/Icon/delete.png";
import Edit from "../../assets/Icon/pencil.png";

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
      </Form.Group>

      {/* Repeat the Form.Group code for other form fields */}

      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outline-primary" type="submit">
            Check Out
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default OrderForm;
