import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarToggler, Nav } from 'reactstrap';

function AppNavbar() {
  return (
    <>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            1123
          </Link>
          <NavbarToggler />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
              {true ? <h1 className="text-white">authLink</h1> : <h1 className="text-white">guestLink</h1>}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;