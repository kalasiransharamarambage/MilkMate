
import { Col, Image, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Delete from "../../assets/Icon/delete.png";
import Edit from "../../assets/Icon/pencil.png";
import Button from 'react-bootstrap/Button';

function FormDisabledInputExample() {
  return (
    <Form>
        <Row > 
  <Col style={{ display: "flex", justifyContent: "center" , fontSize: "35px" ,fontWeight: "bold" }}> 
<Form.Label>Card Details </Form.Label>
</Col>
</Row>
    
      <Form.Group  controlId="formBasicEmail">
      <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
        
        <Form.Label>Card Number :</Form.Label>
        </Col>
          <Col xs={8}>
        <Form.Control placeholder="Card Number" disabled />
        </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group  controlId="formBasicEmail">
      <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
       
        <Form.Label>Card Holder Name :</Form.Label>
        </Col>
          <Col xs={8}>
        <Form.Control placeholder="Card Holder Name" disabled />
        </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>
      </Form.Group>

      
      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outline-primary" type="submit">
            Check Out
          </Button>
        </Col>
      </Row>
      
      </Form>
  );
}

export default FormDisabledInputExample;