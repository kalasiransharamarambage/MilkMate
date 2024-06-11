import React from 'react';
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CheckoutSummary = () => {
  const subtotal = 240.00;
  const shipping = 0.00;
  const total = subtotal + shipping;

  return (
    <Card>
      <Card.Header>Checkout Summary</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col className="d-flex justify-content-start">
              <span>Subtotal</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <span>Rs.{subtotal.toFixed(2)}</span>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col className="d-flex justify-content-start">
              <span>Shipping</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <span>Rs.{shipping.toFixed(2)}</span>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col className="d-flex justify-content-start">
              <span>Total</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <span>Rs.{total.toFixed(2)}</span>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col className="d-flex justify-content-start">
              <span>Payable Total</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <span>Rs.{total.toFixed(2)}</span>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to ="/home">
        <Button variant="primary" block>
          Checkout
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CheckoutSummary;
