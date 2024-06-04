import React from "react";
import CartCard from "../../Components/MycartCard/MycartCard";
import { Col, Container, Row } from "react-bootstrap";
import yoghurt from "../../assets/Img/yogurt.jpg";
import curd from "../../assets/Img/curd.png";
import Butter from "../../assets/Img/Butter.png";
import drink from "../../assets/Img/yogurt.jpg"
import Button from "react-bootstrap";

function mycart() {
  
  const SAMPLE_DATA =[
    {
      name:"Product",
      price:"Price",
      qty:"Quantity",
      total:"Total",
      update:"Update",
      delete:"Delete"

    },
    
    {
      name:"Yogurt",
      price:100,
      qty:3,
      total:300,
      image:yoghurt,
      update:Button,
      delete:Button
    },
    {
      name:"Curd",
      price:60,
      qty:1,
      total:60,
      image:curd,
      update:Button

    },
    {
      name:"Butter",
      price:200,
      qty:4,
      total:800,
      image:Butter

    },
    
    {
      name:"Yogurt Drink",
      price:150,
      qty:2,
      total:300,
      image:drink

    },
  ]
  return (
    <Container fluid>
      <Row>
        <Col xs={8}>
        {SAMPLE_DATA.map((item) => (
        <CartCard key={item.id} name={item.name} price={item.price} qty={item.qty} total={item.total} image={item.image} />
      ))}
        </Col>

        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}

export default mycart;
