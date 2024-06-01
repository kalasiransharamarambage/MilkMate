import React from "react";
import CartCard from "../../Components/MycartCard/MycartCard";
import { Col, Container, Row } from "react-bootstrap";

function mycart() {
  return (
    <Container fluid>
      <Row>
        <Col xs={8} >
          <CartCard />
        </Col>

        <Col xs={4}></Col>
      </Row>
      
      
      
    </Container>
    
  );
}

export default mycart;
