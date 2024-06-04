import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Delete from "../../assets/Icon/delete.png";
import Edit from "../../assets/Icon/pencil.png";


function BasicExample() {
  return (
    <Form>

<Row > 
  <Col style={{ display: "flex", justifyContent: "center" , fontSize: "35px" ,fontWeight: "bold" }}> 
<Form.Label>Online Ordering Form</Form.Label>
</Col>
</Row>
      <Form.Group  controlId="formBasicEmail">
        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Full Name :</Form.Label>
          </Col>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Enter your name" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
      <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
        <Form.Label>Email address :</Form.Label>
        </Col>
        <Col xs={8}>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        
        </Form.Text>
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
            <Form.Label>Phone Number :</Form.Label>
          </Col>
          <Col>
            <Form.Control type="password" placeholder="Enter Contact" />
          </Col>
          <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
      <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
        <Form.Label>District :</Form.Label>
        </Col>
          <Col>
        <Form.Control type="text" placeholder="Enter District" />
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
        <Form.Label>Delivery Address :</Form.Label>
        </Col>
        <Col>
        <Form.Control type="text" placeholder="Enter Address" />
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
        <Form.Label>Quantity :</Form.Label>
        </Col>
        <Col>
        <Form.Control type="text" placeholder="Enter Quantity" />
        </Col>
        <Col xs={2} style={{ display: "flex", justifyContent: "center",  }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group  controlId="formBasicEmail">
        <Row>
        <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
        <Form.Label>Pack Size :</Form.Label>
        </Col>
        <Col>
        <Form.Control type="text" placeholder="Enter packsize" />
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

export default BasicExample;