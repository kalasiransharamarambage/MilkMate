import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Placeholder from 'react-bootstrap/Placeholder';

import homepic from '../assets/akilaImages/homepic.jpg';
import homecow from '../assets/akilaImages/homecow.jpg';
import homegoat from '../assets/akilaImages/homegoat.jpg';

//import Navbar from '../Components/Navbar/Navbar.jsx';





export default function Animal() {

  const homepicStyle = {
    display: 'block',
    margin: 'auto',
    marginTop: '8px',
    width: '99%',
    };

  const spanStyle ={
    font: 'bold',
    fontWeight: '700',
    marginTop : '100px',
    marginLeft: '25px',
    fontSize: '30px'
    };

  const cardStyle ={
    width: "20rem",
    minHeight: "18rem",
    height: "23rem",
    padding: "20px",
    border:"none",
    backgroundColor:"#E5EDFF",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    borderRadius:'40px'
    }

  const homecowStyle ={
    height: '80%',
    borderRadius:'55px 55px 30px 30px'
    
  } 
  const homegoatStyle ={
    height: '80%',
    borderRadius:'55px 55px 30px 30px'
  }  

  return (
    <div>
      {/* <Navbar/> */}
      <img style={homepicStyle} src={homepic} alt="homepic" /><br />
      <span style={spanStyle}> Choose your Animal </span><br /><br />

      <div className="d-flex justify-content-around">
      <Card style={cardStyle}>
        <Card.Img variant="top" style={homecowStyle} src={homecow} />
        <Card.Body>
          
          <Button style ={
            {display: 'block',
            margin:'auto',
            width:'60%',
            borderRadius:'10px'
          }
            } variant="primary"><span style={{font:'bold',fontWeight:'500'}}>Cow</span></Button>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant="top" style={homegoatStyle} src={homegoat} />
        <Card.Body>
          {/* <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} /> */}

          <Button style ={
            {display: 'block',
            margin:'auto',
            width:'60%',
            borderRadius:'10px'
          }
            } variant="primary"><span style={{font:'bold',fontWeight:'500'}}>Goat</span></Button>
        </Card.Body>
      </Card>

      
    </div>

      <br/>
      <br/>

    </div>

  )
  
}
