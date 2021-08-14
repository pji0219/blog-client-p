import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarToggler, Nav } from 'reactstrap';
import LoginModal from './auth/LoginModal';

function AppNavbar() {
  return (
    <>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            1123
          </Link>
          <NavbarToggler />
          <Collapse isOpen={true} className="d-flex justify-content-end" navbar>
            <Nav className="ml-auto d-flex justify-content-end" navbar>
              {false ? (
                <h1 className="text-white">authLink</h1>
              ) : (
                <LoginModal />
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;