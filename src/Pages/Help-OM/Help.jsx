import React from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const Help = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-center mb-4">How can we help you?</h1>
          <Form>
            <Form.Group controlId="formSearch">
              <Form.Control type="text" placeholder="Enter your question or keyword" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <h3 className="text-center mb-4">Popular Topics</h3>
            
          <ListGroup>
            <Row>
            <Col>
            <ListGroup.Item>How to create my account?</ListGroup.Item>
            <ListGroup.Item>What is Clicons Returns policy?</ListGroup.Item>
            <ListGroup.Item>How long is refund process?</ListGroup.Item>
            </Col>
            <Col>
            <ListGroup.Item>What are the "delivery Timelines"?</ListGroup.Item>
            <ListGroup.Item>How to change my password?</ListGroup.Item>
            <ListGroup.Item>How to update my information?</ListGroup.Item>
            </Col>
            <Col>
            <ListGroup.Item>How to cancel Clicons Order?</ListGroup.Item>
            <ListGroup.Item>Ask the Digital and Device Community?</ListGroup.Item>
            <ListGroup.Item>How to change my shop name?</ListGroup.Item>
          </Col>
          </Row>
          </ListGroup>
      
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <h3 className="mb-4">Don't find your answer?</h3>
          <h4 className="mb-4">Contact with us</h4>
          <Button variant="outline-primary" className="mr-3">
            Call on me
            <br />
            +1 (555) 123-4567
          </Button>
          <Button variant="outline-primary">
            Chat with us
            <br />
            example@example.com
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={2}>
          <Button variant="secondary" className="w-100">
            Back
          </Button>
        </Col>
      </Row>
     
    </Container>
  );
};

export default Help;