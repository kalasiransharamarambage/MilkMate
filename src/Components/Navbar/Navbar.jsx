import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import CowLogo from "../../assets/Img/cow.png";
import Button from "react-bootstrap/Button";


function NavbarComponent() {
  return (
    <Navbar style={{ backgroundColor: "#9AAFE4" }} variant="dark">
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
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link
                style={{ color: "black", fontSize: "20px", fontWeight: "600", marginRight:"20px" }}
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "black", fontSize: "20px", fontWeight: "600",  marginRight:"20px" }}
              >
                About
              </Nav.Link>
              <NavDropdown
                title="Service"
                style={{ color: "black", fontSize: "20px", fontWeight: "600" }}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div style={{marginLeft:"50px"}}>
              <Button variant="outline-primary">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
