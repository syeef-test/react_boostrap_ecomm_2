import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../store/cart-context";

const Header = ({ toggleModal }) => {
  const cartContext = useContext(CartContext);

  const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
    return curQuantity + Number(item.quantity);
  }, 0);

  const navLinkStyle = {
    color: "plum",
    textDecoration: "none",
    padding: "0.5rem 1rem",
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-com App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/about" style={navLinkStyle}>
              About
            </NavLink>
            <NavLink to="/contactus" style={navLinkStyle}>
              Contact Us
            </NavLink>
            <NavLink to="/products" style={navLinkStyle}>
              Products
            </NavLink>
          </Nav>

          <Button variant="outline-dark" onClick={toggleModal}>
            Cart: {totalQuantity}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
