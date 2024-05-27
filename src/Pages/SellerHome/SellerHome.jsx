import React from "react";
import Card from "react-bootstrap/Card";
import Milk01 from "../../assets/Img/Milk01.jpg";
import Milk02 from "../../assets/Img/Milk02.webp";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MdAppRegistration, MdPayment, MdSecurity } from "react-icons/md";
import { FaPersonRunning, FaRegistered, FaList } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";

const cardData = [
  {
    id: 1,
    style: {
      minHeight: '18rem',
      padding: '10px',
      margin: '40px',
      border: 'none',
      backgroundColor: '#C9E9F2',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    },
    content: (
      <Row className="text-center align-items-center h-100">
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <span style={{ fontSize: '4rem', margin: '1.5rem' }}>Sell on</span>
          <br />
          <span style={{ fontSize: '4rem' }}>Milk Mate</span>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image
            src={Milk01}
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '20px',
            }}
          />
        </Col>
      </Row>
    ),
  },
  {
    id: 2,
    style: {
      minHeight: '18rem',
      padding: '20px',
      margin: '40px',
      border: 'none',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    },
    content: (
      <>
        <span
          style={{
            fontSize: '3rem',
            color: '#4371E7',
            textAlign: 'center',
            display: 'block',
            marginBottom: '20px',
          }}
        >
          Why sell on Milk Mate?
        </span>
        <Row className="h-100 text-center d-flex align-items-center">
          <Col xs={12} md={6} style={{ fontSize: '2rem', marginBottom: '20px' }}>
            <div>
              <MdAppRegistration size="2.5rem" />
              <span> Free Registration</span>
            </div>
            <div style={{ marginTop: '20px' }}>
              <MdPayment size="2.5rem" />
              <span> Timely Payments</span>
            </div>
          </Col>
          <Col xs={12} md={6} style={{ fontSize: '2rem' }}>
            <div>
              <MdSecurity size="2.5rem" />
              <span> Security</span>
            </div>
            <div style={{ marginTop: '20px' }}>
              <FaPersonRunning size="2.5rem" />
              <span> Efficiency</span>
            </div>
          </Col>
        </Row>
      </>
    ),
  },
  {
    id: 3,
    style: {
      minHeight: '18rem',
      padding: '20px',
      margin: '40px',
      border: 'none',
      backgroundColor: '#C9E9F2',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    },
    content: (
      <Row className="text-center h-100">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image
            src={Milk02}
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '20px',
            }}
          />
        </Col>
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <span style={{ fontSize: '3rem', margin: '1.5rem' }}>
            What are you waiting for?
          </span>
          <br />
          <span style={{ fontSize: '3rem' }}>Join with us</span>
          <br />
          <Button variant="outline-primary" className="mt-3">Add Products</Button>
          <br />
          <Button variant="outline-primary" className="mt-3">All Products</Button>
        </Col>
      </Row>
    ),
  },
  {
    id: 4,
    style: {
      minHeight: '18rem',
      padding: '20px',
      margin: '40px',
      border: 'none',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    },
    content: (
      <>
        <span
          style={{
            fontSize: '3rem',
            color: '#4371E7',
            textAlign: 'center',
            display: 'block',
            marginBottom: '20px',
          }}
        >
          3 simple steps to start selling
        </span>
        <Row className="h-100 text-center d-flex align-items-center">
          <Col xs={12} md={4} style={{ fontSize: '2rem', marginBottom: '20px' }}>
            <div>
              <FaRegistered size="2.5rem" />
              <span style={{ marginLeft: '10px' }}>SignUp for Free</span>
            </div>
          </Col>
          <Col xs={12} md={4} style={{ fontSize: '2rem', marginBottom: '20px' }}>
            <div>
              <IoInformationCircle size="2.5rem" />
              <span style={{ marginLeft: '10px' }}>Add Information</span>
            </div>
          </Col>
          <Col xs={12} md={4} style={{ fontSize: '2rem', marginBottom: '20px' }}>
            <div>
              <FaList size="2.5rem" />
              <span style={{ marginLeft: '10px' }}>List Products</span>
            </div>
          </Col>
        </Row>
      </>
    ),
  },
];

function SellerHome() {
  return (
    <>
      {cardData.map((card) => (
        <Card key={card.id} style={card.style}>
          {card.content}
        </Card>
      ))}
    </>
  );
}

export default SellerHome;