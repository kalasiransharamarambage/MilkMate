import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Delete from "../../assets/Icon/delete.png";
import Edit from "../../assets/Icon/pencil.png";


function BasicExample() {
  return (
    <Form>

<Form.Group className="mb-3" controlId="formBasicEmail">
      <Row>
       <Col xs={2} style={{display:"flex",justifyContent:"end" } }> 
        <Form.Label>Full Name :</Form.Label>
        </Col>
        <Col>
        <Form.Control type="text " placeholder="Enter your name" />
        </Col>
        <Col xs={2} display={"flex"} justifyContent = {"end"} style={{padding:"20px"}}>
        <Image src={Delete } rounded style={{width:"30px",height:"30px"}}/>
        <Image src={Edit } rounded style={{width:"25px",height:"25px"}}/>
        
        </Col>
        </Row>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="password" placeholder="Enter Contact" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>District</Form.Label>
        <Form.Control type="text " placeholder="Enter District" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Delivery Address </Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text " placeholder="Enter Quantity" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pack Size</Form.Label>
        <Form.Control type="text " placeholder="Enter packsize" />
        
      </Form.Group>
     

     <Button variant="outline-primary" type="submit">
        Check Out
      </Button>
    </Form>
  );
}

export default BasicExample;