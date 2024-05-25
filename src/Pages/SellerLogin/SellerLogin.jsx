import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import milkproducts from "../../assets/Img/milkproducts.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SellerLogin() {
  return (
    <Container className="my-4">
      <br />
      <h1 className="text-center mb-4" style={{ fontSize: "55px" }}>
        WELCOME TO SELLER DASHBOARD
      </h1>
      <br />
      <Row className="justify-content-center">
        <Col lg={8} md={10} sm={12}>
          <Card className="p-4 shadow-sm" style={{ border: "none", backgroundColor: "#C9E9F2" }}>
            <Row>
              <Col md={6}>
                <Image src={milkproducts} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
              </Col>
              <Col md={6}>
                <h2 className="text-center mb-4" style={{ fontSize: "30px", color: "#0B4EFC", fontFamily: "bold" }}>
                  Seller Login
                </h2>
                <Form>
                  <Form.Group className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formHorizontalCheck">
                    <Form.Check label="Remember me" />
                  </Form.Group>

                  <Button type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SellerLogin;
