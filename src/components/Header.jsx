import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Header({ toggleModal }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">E-com App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Link to="/" exact>
                Home
              </Link>
              <Link to="/store">Store</Link>
              <Link to="/about">About</Link> */}

              <Button onClick={toggleModal}>Open Cart</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Container>
        <div style={{ backgroundColor: "grey", height: "100px" }}>
          <h3>The Generics</h3>
        </div>
      </Container> */}
    </>
  );
}

export default Header;
