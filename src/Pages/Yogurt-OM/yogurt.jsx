import React from 'react'
import { Image, Row, Col, Container } from 'react-bootstrap';
import yoghurt from "../../assets/Img/drink.png";

function yogurt() {
    return (
        <Container>
            <Row style={{ display: "flex", justifyContent: "center" }} >

                <Col >
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                    <h1> Yogurt </h1>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Image src={yoghurt} rounded style={{ width: "auto", height: "50vh" }} />
                    </Col>
                    <Row xs={2}  style={{ display: "flex", justifyContent: "center" ,fontWeight: "bold"  }}>
                    <p>
                    Including in creamy goodness delivered straight to your doorstep . 
                    Explore exquisite range of yogurt delights on our online dairy delivery platform today .
                        </p>
                   
                    </Row>
                    <Row style={{ display: "flex", justifyContent: "center" , fontWeight: "bold"  }} >
                            Rs.100.00
                    </Row>
                    
                   
                </Col>

                <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outline-primary" type="submit">
            Check Out
          </Button>
        </Col>
      </Row>
      
            </Row>
        

        </Container>
    );
}

export default yogurt