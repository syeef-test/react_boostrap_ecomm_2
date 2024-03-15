import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">E-com App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Button>Cart</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div style={{ backgroundColor: "grey", height: "100px" }}>
          <h3>The Generics</h3>
        </div>
      </Container>
      <Container>
        <h1>Music</h1>
      </Container>
      <Container>
        <h1>Products</h1>
        <ul>
          <Container className="mt-4">
            <Row className="justify-content-center">
              {productsArr.map((item) => (
                <Col key={item.title} xs={12} md={6} lg={6}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>${item.price}</Card.Text>
                      <Button variant="info">Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </ul>
      </Container>
      <Container>
        <Button>See the cart</Button>
      </Container>
      <Container>
        <h4>The Generics</h4>
      </Container>
    </>
  );
}

export default App;
