

import React from 'react'
import { Image ,Row, Col,  } from 'react-bootstrap';
import yoghurt from "../../assets/Img/drink.png";
import Delete from "../../assets/Icon/delete.png";
import Edit from "../../assets/Icon/pencil.png";
import curd from "../../assets/Img/curd2.png"
import cheese from "../../assets/Img/cheese.jpg";
import Butter from "../../assets/Img/Butter.png";
import MilkPowder from "../../assets/Img/milkPowder.jpg"
import drink from "../../assets/Img/yogurt.jpg"

function mycart() {
  return (

    <Row>
      
  <Row > 
   <Col style={{ display: "flex", justifyContent: "center" }}>
     <h1> My Cart </h1>
     </Col>
  </Row>
  
  <Row>
  <Col xs={2}>
  </Col>
    <Col>Product
    </Col>
    <Col>Price
    </Col>
    <Col>Quantity
    </Col>
    <Col>Subtotal
    </Col>
    <Col>Update
    </Col>
    <Col>Delete
    </Col>
    <Col xs={4}>
    </Col>
  </Row>

  <Row>
  <Col xs={2}> </Col>
                                                                                                      
 </Row>
  
  <Row style={{alignitem:"center"}}>
  <Col xs={2}>
  <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Image src={yoghurt} rounded style={{ width: "auto", height: "10vh" }} />
                    </Col>
  </Col >
    <Col xs={1} style={{fontWeight: "bold"}}>Yogurt
    </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Rs.100
    </Col>
    <Col xs={1}>
    </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Rs.300
    </Col>
    <Col xs={1}><Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
    </Col>
    <Col xs={1}> <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />        
    </Col>
    <Col xs={4}>
    </Col>
  </Row>

 <Row>
  
  <Col xs={2}> </Col>
  ___________________________________________________________________________
 </Row>
  
  




  <Col xs={2} >
  <Col  style={{ display: "flex", justifyContent: "center" }}>
                    <Image src={curd} rounded style={{ width: "auto", height: "10vh" }} />
                    </Col>
  </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Curd
    </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Rs.60.00
    </Col>
    <Col xs={1} >
    </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Rs.60.00
    </Col>
    <Col xs={1}><Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
    </Col>
    <Col xs={1}> <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />        
    </Col>
    <Col xs={4}>
    </Col>

    <Row>
  
  <Col xs={2}> </Col>
  ___________________________________________________________________________
 </Row>
  
  




  <Col xs={2}>
  <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Image src={drink} rounded style={{ width: "auto", height: "10vh" }} />
                    </Col>
  </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Yogurt Drink
    </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Rs.150.00
    </Col>
    <Col xs={1} >
    </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Rs.150.00
    </Col>
    <Col xs={1}><Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
    </Col>
    <Col xs={1}> <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />        
    </Col>
    <Col xs={4}>
    </Col>



    <Row>
  
  <Col xs={2}> </Col>
  ___________________________________________________________________________



  <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outline-primary" type="submit">
            Back
          </Button>
        </Col>
      </Row>
      
 </Row>
  
  




  <Col xs={2}>
  <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Image src={Butter} rounded style={{ width: "auto", height: "10vh" }} />
                    </Col>
  </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Milk Butter
    </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Rs.200.00
    </Col>
    <Col xs={1} >
    </Col>
    <Col xs={1} style={{fontWeight: "bold"}}>Rs.200.00
    </Col>
    <Col xs={1}><Image src={Edit} rounded style={{ width: "25px", height: "25px" }} />
    </Col>
    <Col xs={1}> <Image src={Delete} rounded style={{ width: "30px", height: "30px", marginRight:"25px" }} />        
    </Col>
    <Col xs={4}>
    </Col>


  </Row>

  




  )
}

export default mycart







