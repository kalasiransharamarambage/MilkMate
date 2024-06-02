import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Yogurt from "../../assets/Img/yogurt.jpg";
import Curd from "../../assets/Img/yogurt.jpg";


function MycartCard({name, image, price, qty, total, remove}) {
  return (
    <>
      <Container fluid >
        <Row className="mt-3" style={{padding:"20px", backgroundColor:"#9AAFE4", borderRadius:"20px"}}>
          <Col style={{ display: "flex" }}>
            <Col xs={2} style={{display:"flex", justifyContent:"center"}}>
              <Image
                src={image}
                style={{ width: "110px", borderRadius: "10px" }}
              />
            </Col>
            <Col xs={2} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h6>{name}</h6>
              <h3>Yogurt</h3>
            </Col>
            <Col xs={2} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h3>{price}</h3>
            </Col>
            <Col xs={2} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h3>{qty}</h3>
            </Col>
            <Col xs={2} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h3>{total}</h3>
            </Col>
            <Col xs={2} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h3>{remove}</h3>
            </Col>
          </Col>
        </Row>

        
      </Container>

     

      
    </>
  );
}

export default MycartCard;
