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
<Form.Label>Add Products</Form.Label>
</Col>
</Row>
<Row><Col style={{ display: "flex", justifyContent: "start" }}>
    <h4>Product Information</h4></Col>
</Row>
      <Form.Group  controlId="formBasicEmail">
        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Product Name :</Form.Label>
          </Col>
          <Col xs={8}  >
            <Form.Control style={{backgroundColor:"#9AAFE4"}} type="text" placeholder="Enter your name" />
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
        <Form.Label >Product Image :</Form.Label>
        </Col>
        <Col xs={8}>
        <Form.Control style={{backgroundColor:"#9AAFE4"}} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        
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
            <Form.Label>Purchase Price :</Form.Label>
          </Col>
          <Col>
            <Form.Control style={{backgroundColor:"#9AAFE4"}} type="password" placeholder="Enter Contact" />
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
        <Form.Label>Brand :</Form.Label>
        </Col>
          <Col>
        <Form.Control style={{backgroundColor:"#9AAFE4"}} type="text" placeholder="Enter District" />
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
        <Form.Control style={{backgroundColor:"#9AAFE4"}} type="text" placeholder="Enter Address" />
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
        <Form.Label>Manufacturing Date :</Form.Label>
        </Col>
        <Col>
        <Form.Control style={{backgroundColor:"#9AAFE4"}} type="text" placeholder="Enter Quantity" />
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
        <Form.Control style={{backgroundColor:"#9AAFE4"}} type="text" placeholder="Enter packsize" />
        </Col>
        <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
     </Row>
          <Row><Col style={{ display: "flex", justifyContent: "start" }}>
            <h4>Contact Information</h4></Col>
          </Row>
          <Form.Group  controlId="formBasicEmail">
        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Label>Seller Name :</Form.Label>
          </Col>
          <Col xs={8}  >
            <Form.Control style={{backgroundColor:"#9AAFE4"}} type="text" placeholder="Enter your name" />
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
          <Col xs={8}  >
            <Form.Control style={{backgroundColor:"#9AAFE4"}} type="text" placeholder="Enter your name" />
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
        <Form.Label >Email Address :</Form.Label>
        </Col>
        <Col xs={8}>
        <Form.Control style={{backgroundColor:"#9AAFE4"}} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        
        </Form.Text>
        </Col>
        <Col xs={2} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />
            <Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
          </Col>
        
        
        </Row>
      </Form.Group>


      </Form.Group>



      <Row>
        <Col style={{ display: "flex", justifyContent: "start" }}>
          <Button variant="outline-primary" type="submit">
            Back
          </Button>
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", justifyContent: "start" }}>
          <Button variant="outline-primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>



    </Form>
  );
}

export default BasicExample;