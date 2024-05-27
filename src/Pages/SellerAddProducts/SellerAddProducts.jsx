import React from 'react';
import { Col, Row, Form, Button, Card } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const formFields = [
  { label: 'Product Name', type: 'text', placeholder: 'Enter product name' },
  { label: 'Product Image', type: 'text', placeholder: 'Add Image', style: { height: '150px' } },
  { label: 'Purchase Price', type: 'text', placeholder: 'Enter purchase price' },
  { label: 'Brand', type: 'text', placeholder: 'Enter brand' },
  { label: 'Quantity', type: 'text', placeholder: 'Enter quantity' },
  { label: 'Manufacturing Date', type: 'text', placeholder: 'Enter manufacturing date' },
  { label: 'Pack Size', type: 'text', placeholder: 'Enter pack size' },
  { label: 'Seller Name', type: 'text', placeholder: 'Enter seller name' },
  { label: 'Phone Number', type: 'text', placeholder: 'Enter phone number' },
  { label: 'Email Address', type: 'email', placeholder: 'Enter email' },
];

function SellerAddProducts() {
  return (
    <Card
      style={{
        width: '800px',
        maxWidth: '80rem',
        padding: '20px',
        border: 'none',
        backgroundColor: '#C9E9F2',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
        margin: '0 auto',
      }}
    >
      <Form style={{ marginLeft: "20px" }}>
        <Row className="mb-3">
          <Col className="text-center" style={{ fontSize: '35px', fontWeight: 'bold' }}>
            Add Products
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h4 style={{ marginLeft: "60px" }}>Product Information</h4>
          </Col>
        </Row>
        {formFields.slice(0, 7).map((field, index) => (
          <Form.Group className="mb-3" key={index}>
            <Row>
              <Col xs={12} md={2} className="text-md-end">
                <Form.Label>{field.label} :</Form.Label>
              </Col>
              <Col xs={12} md={8}>
                <Form.Control
                  style={{ width: '100%', textAlign: "center", ...field.style }}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </Col>
              <Col xs={12} md={2} className="text-center d-flex align-items-center justify-content-center">
                <MdDelete style={{ cursor: 'pointer' }} />
                <FaEdit style={{ cursor: 'pointer', marginLeft: '10px' }} />
              </Col>
            </Row>
          </Form.Group>
        ))}
        <Row className="mb-3">
          <Col>
            <h4 style={{ marginLeft: "60px" }}>Contact Information</h4>
          </Col>
        </Row>
        {formFields.slice(7).map((field, index) => (
          <Form.Group className="mb-3" key={index}>
            <Row>
              <Col xs={12} md={2} className="text-md-end">
                <Form.Label>{field.label} :</Form.Label>
              </Col>
              <Col xs={12} md={8}>
                <Form.Control
                  style={{ width: '100%', textAlign: "center" }}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </Col>
              <Col xs={12} md={2} className="text-center d-flex align-items-center justify-content-center">
                <MdDelete style={{ cursor: 'pointer' }} />
                <FaEdit style={{ cursor: 'pointer', marginLeft: '10px' }} />
              </Col>
            </Row>
          </Form.Group>
        ))}
        <Row className="mb-3">
          <Col className="text-center">
            <Button variant="primary" type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default SellerAddProducts;