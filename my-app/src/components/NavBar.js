import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><i class="fa-solid fa-book-open"></i> One More Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Log in</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
