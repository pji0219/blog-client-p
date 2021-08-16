import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarToggler, Nav } from 'reactstrap';
import { LOGOUT_REQUEST } from '../redux/types';
import LoginModal from './auth/LoginModal';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {isAuthenticated, user, userRole} = useSelector(state => state.auth);
  console.log(userRole, 'userRole');

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST
    });
  }, [dispatch]);

  useEffect(() => {
    setIsOpen(false);
  }, [user]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            1123
          </Link>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} className="d-flex justify-content-end" navbar>
            <Nav className="ml-auto d-flex justify-content-end" navbar>
              {isAuthenticated ? (
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