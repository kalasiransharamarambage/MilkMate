import React from 'react';
import NavbarComponent from '../Components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'; 

function Layout() {
  return (
    <>
      <NavbarComponent />
      <Container fluid className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
