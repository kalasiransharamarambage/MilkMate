import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Yogurt from "../../assets/Img/yogurt.jpg"; // Conflicting import statement

function MycartCard({ name, price, qty, total, remove }) {
  return (
    <>
      <Container fluid>
        <Row style={{ padding: "20px", backgroundColor: "#9AAFE4", borderRadius: "20px" }}>
          <Col style={{ display: "flex" }}>
            <Col xs={2} style={{ display: "flex", justifyContent: "center" }}>
              <Image
                
                style={{ width: "110px", borderRadius: "10px" }}
                alt="Yogurt"
              />
            </Col>
            <Col xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <h6>{name}</h6>
            </Col>
            <Col xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <h3>{price}</h3>
            </Col>
            <Col xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <h3>{qty}</h3>
            </Col>
            <Col xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <h3>{total}</h3>
            </Col>
            <Col xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <h3>{remove}</h3>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MycartCard;
