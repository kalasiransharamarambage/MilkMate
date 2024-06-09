import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LinkContainer from "react-bootstrap/LinkContainer";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import CowLogo from "../../assets/Img/cow.png";
import Button from "react-bootstrap/Button";

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
            <LinkContainer to="/home">
              <Nav.Link
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  borderRadius: "10px",
                  backgroundColor: "#6A8FEF",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
              >
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  borderRadius: "10px",
                  backgroundColor: "#6A8FEF",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
              >
                About Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  borderRadius: "10px",
                  backgroundColor: "#6A8FEF",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
              >
                Contact Us
              </Nav.Link>
            </LinkContainer>
            <NavDropdown
              title="Service"
              id="basic-nav-dropdown"
              style={{
                fontSize: "18px",
                fontWeight: "600",
                borderRadius: "10px",
                backgroundColor: "#6A8FEF",
                color: "white",
                cursor: "pointer",
              }}
            >
              <LinkContainer to="/profile">
                <NavDropdown.Item>Admin Dashboard</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/animal">
                <NavDropdown.Item>Animal Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/mainform">
                <NavDropdown.Item>Construction Plan</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/delivery1">
                <NavDropdown.Item>Delivery System</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/delivery4">
                <NavDropdown.Item>Reviews</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/sellerlogin">
                <NavDropdown.Item>Seller Dashboard</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
            <LinkContainer to="/registerform">
              <Button variant="outline-primary">Sign Up</Button>
            </LinkContainer>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;