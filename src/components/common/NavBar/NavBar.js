import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './NavBar.module.scss';

const NavBar = () => (
  <Navbar className={styles.navbar} expand="md">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Furniture">Furniture</Nav.Link>
        <Nav.Link href="#Chair">Chair</Nav.Link>
        <Nav.Link href="#Table">Table</Nav.Link>
        <Nav.Link href="#Sofa">Sofa</Nav.Link>
        <Nav.Link href="#Bedroom">Bedroom</Nav.Link>
        <Nav.Link href="#Blog">Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
