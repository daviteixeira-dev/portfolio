import React from "react";

import "./Menu.css";

import { Nav, Navbar, Container } from "react-bootstrap";

import logo from "../../images/logo.png";

function Menu() {
  return (
    <Navbar bg="dark" className="navbar" expand="xl" fixed="top">
      <Container>
        <Navbar.Brand href="#main-title">
          <img
            src={logo}
            width="50"
            height="50"
            loading="eager"
            alt="Essa é a logomarca da página"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/index.html">Home</Nav.Link>
            <Nav.Link href="/pages/projects/page-01.html">Projetos</Nav.Link>
            <Nav.Link href="pages/blog.html">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
