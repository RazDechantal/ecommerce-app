import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Digital Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
