import React from 'react';
import { Col, Row, Form, Button, Card } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function SellerPayment() {
  const formFields = [
    { controlId: 'formGridAddress1', label: 'Card Number', placeholder: 'Enter Card Number' },
    { controlId: 'formGridAddress2', label: 'Card Holder Name', placeholder: 'Enter Card Holder Name' },
  ];

  const expiryFields = [
    { controlId: 'formGridMM', label: 'MM' },
    { controlId: 'formGridYY', label: 'YY' },
    { controlId: 'formGridCVV', label: 'CVV' },
  ];

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
        {formFields.map((field, index) => (
          <Form.Group className="mb-3" controlId={field.controlId} key={index}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control placeholder={field.placeholder} />
          </Form.Group>
        ))}

        <Row className="mb-3">
          {expiryFields.map((field, index) => (
            <Form.Group as={Col} controlId={field.controlId} key={index}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control />
            </Form.Group>
          ))}
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
