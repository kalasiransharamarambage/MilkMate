import React from 'react';
import { Col, Row, Form, Button, Card } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



function SellerPayment() {
  return (
    <Card
      style={{
        width: '650px',
        maxWidth: '80rem',
        padding: '20px',
        border: 'none',
        backgroundColor: '#C9E9F2',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
        margin: '0 auto',
      }}
    >
         <Row className="mb-3">
          <Col className="text-center" style={{ fontSize: '35px', fontWeight: 'bold' }}>
            Card Details
          </Col>
        </Row>
 <Form>
<Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Card Number</Form.Label>
        <Form.Control placeholder="Enter Card Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Card Holder Name</Form.Label>
        <Form.Control placeholder="Enter Card Holder Name" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>MM</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>YY</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CVV</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

     

      <Row className="mb-3">
          <Col className="text-center">
            <Button variant="primary" type="submit">Submit</Button>
          </Col>
        </Row>
    </Form>
    </Card>
  );
}

export default SellerPayment;