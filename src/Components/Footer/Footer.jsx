import React from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';

const footerStyle = {
  backgroundColor: '#9AAFE4',
  padding: '4rem 0',
  color: 'black',
  margin:'50px',
  width:'1300px',
  
};

const listItemStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'black',
};

const linkStyle = {
  color: 'black',
  textDecoration: 'none'
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container fluid>
        <Row>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item style={listItemStyle}><a href="#" style={linkStyle}>Home</a></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><a href="#" style={linkStyle}>About</a></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><a href="#" style={linkStyle}>Services</a></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5>Contact Info</h5>
            <ListGroup variant="flush">
              <ListGroup.Item style={listItemStyle}>0721902781</ListGroup.Item>
              <ListGroup.Item style={listItemStyle}>0712837259</ListGroup.Item>
              <ListGroup.Item style={listItemStyle}>dailyproducts2024@gmail.com</ListGroup.Item>
              <ListGroup.Item style={listItemStyle}>2/A, High Level Road, Galle</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5>Follow Us</h5>
            <ListGroup variant="flush">
              <ListGroup.Item style={listItemStyle}><a href="#" style={linkStyle}>Facebook</a></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><a href="#" style={linkStyle}>Twitter</a></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><a href="#" style={linkStyle}>Instagram</a></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><a href="#" style={linkStyle}>WhatsApp</a></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><a href="#" style={linkStyle}>LinkedIn</a></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3} md={6}>
            <h5>Subscribe</h5>
            <Form>
              <Form.Group controlId="formSubscribe">
                <Form.Control type="email" placeholder="Enter your email" style={{ borderColor: 'black' }} />
              </Form.Group>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'black', borderColor: 'black' }}>
                Subscribe
              </button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;