

import React from 'react'
// import { Row } from 'react-bootstrap'
// import Button from 'react-bootstrap'

function Help() {
  return (
    <Container>
  <Row>
    <Col>
    <Row >
      <Col style={{ display: "flex", justifyContent: "end" , padding:"px", backgroundColor:"#9AAFE4"}}>
          <Button variant="outline-primary" type="submit">
            HELP CENTER
          </Button>
        </Col>
      </Row>

      <Row>
        <h3>How we can help you!</h3>
      </Row>

      <Row>
          
            <Form.Control style={{backgroundColor:"#9AAFE4"}} type="text" placeholder="Enter your name" />
            <Button variant="outline-primary" type="submit">
                 SEARCH</Button>
        </Row>
      </Col>
      <Col>
      //image
      </Col>
      </Row>

      <Row style={{ display: "flex", justifyContent: "end" }}>
        <h5>Popular Topics </h5>
      </Row>
      <Row>
        <Col>
        <Row>-How do I return my time?</Row>
        <Row>What is Clicons Returns policy?</Row>
        <Row>How long is refund process?</Row>
        </Col>
        <Col>
        <Row>-What are the "delivery Timelines"?</Row>
        <Row>What is "Discover your Daraz Campaing2022"?</Row>
        <Row>What is the Voucher & Gift offer in the Campaing?</Row>
        </Col>
        <Col>
        <Row>-How to cancel Clicons Order?</Row>
        <Row>Ask the Digital and Device Community?</Row>
        <Row>How to change my shop name?</Row>
        </Col>
        
      </Row>
      
      <Row style={{padding:"20px", backgroundColor:"white", borderRadius:"15px"}}>

       </Row>
       <Row>
       <Col style={{ display: "flex", justifyContent: "center"  }}>
          <Button variant="outline-primary" type="submit">
           CONTACT US
          </Button>

        </Col>
        <Row xs={2}><h4>Don't find your answer</h4></Row>
        <Row> 
          <Row>
            
            <Col xs={1}>
                //image
            </Col>
            <Col xs={4}>
                <h6>Call us now</h6>
                <p> We are available online from 9.00 AM to 5.00PM
                (GMT+5:45)Talk with us now</p>
                <h4>+94-xxx-xxxx</h4>

            </Col> 
            <Row>
            <Col style={{ display: "flex", justifyContent: "center"  }}>
          <Button variant="outline-primary" type="submit">
            CALL NOW
          </Button>
        </Col>
              </Row>

            <Col xs={1}>
                //image
            </Col>
            <Col xs={4}>
                <h6>Chat with us</h6>
                <p> We are available online from 9.00 AM to 5.00PM
                (GMT+5:45)Talk with us now</p>
                <h4>Support@clicon.com</h4>

            </Col>
            
            <Row>
            <Col style={{ display: "flex", justifyContent: "center"  }}>
          <Button variant="outline-primary" type="submit">
            CONTACT US
          </Button>
        </Col>
              </Row>
          </Row>
            
           </Row>
        
        <Col>

            </Col>
       
       
       <Row>
       <Col style={{ display: "flex", justifyContent: "center"  }}>
          <Button variant="outline-primary" type="submit">
            Back
          </Button>
          </Col>
       </Row>
       </Row>
      </Container>
  )
}

export default Help