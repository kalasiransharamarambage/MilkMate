import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import CowLogo from "../../assets/Img/cow.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar style={{ backgroundColor: "#9AAFE4" }} expand="lg" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand
          href="#home"
          style={{
            color: "#4371E7",
            fontSize: "28px",
            fontWeight: "650",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={CowLogo} alt="Logo" style={{ height: "60px" }} />
          </div>
          Milk Mate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "600",
               marginLeft:"600px"
              }}
              href="home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="help"
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "600",
                marginRight: "20px",
              }}
            >
              Help
            </Nav.Link>
            <NavDropdown
              title="Service"
              style={{ color: "black", fontSize: "20px", fontWeight: "600" }}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="profile">Admin Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="animal">Animal Profile</NavDropdown.Item>
              <NavDropdown.Item href="mainform">
                Construction Plan
              </NavDropdown.Item>
              <NavDropdown.Item href="delivery1">Delivery System</NavDropdown.Item>
              <NavDropdown.Item href="delivery4">Reviews</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="sellerlogin">
                Seller Dashboard
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
            <Link to="/registerform">
              <Button variant="outline-primary">Sign Up</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
