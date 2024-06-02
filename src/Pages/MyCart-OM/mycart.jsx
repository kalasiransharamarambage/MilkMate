import React from "react";
import CartCard from "../../Components/MycartCard/MycartCard";
import { Col, Container, Row } from "react-bootstrap";

function mycart() {
  
  const SAMPLE_DATA =[
    {
      name:"Sahan",
      price:100,
      qty:1,
      total:100,

    },
    {
      name:"kVINDU",
      price:100,
      qty:1,
      total:100,

    },
    {
      name:"HASINDI",
      price:100,
      qty:1,
      total:100,

    },
  ]
  return (
    <Container fluid>
      <Row>
        <Col xs={8}>
        {SAMPLE_DATA.map((item) => (
        <CartCard key={item.id} name={item.name} price={item.price} qty={item.qty} total={item.total} />
      ))}
        </Col>

        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}

export default mycart;
