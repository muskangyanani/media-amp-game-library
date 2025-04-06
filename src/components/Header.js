import React from 'react';
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({ onSearch }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">GameLibrary</Navbar.Brand>
        <Form className="d-flex ms-auto" onSubmit={e => e.preventDefault()}>
          <FormControl
            type="search"
            placeholder="Search games..."
            className="me-2"
            onChange={(e) => onSearch(e.target.value)}
          />
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/library">Library</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
