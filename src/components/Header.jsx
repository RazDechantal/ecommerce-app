import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useUser } from '../context/UserContext';
import { auth } from '../firebase-config';

const Header = () => {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
  };

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
            {user ? (
              <>
                <Navbar.Text className="me-3">
                  Signed in as: <Link to="/profile">{user.email}</Link>
                </Navbar.Text>
                <Button variant="outline-light" onClick={handleLogout}>Log Out</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
