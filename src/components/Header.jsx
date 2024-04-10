import React, { useContext, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

const Header = ({ toggleModal }) => {
  const cartContext = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useHistory();

  useEffect(() => {
    const fetchCart = () => {
      if (isLoggedIn) {
        cartContext.getCartItem();
      }
    };
    fetchCart();
  }, [isLoggedIn]);

  const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
    return curQuantity + Number(item.quantity);
  }, 0);

  const navLinkStyle = {
    color: "plum",
    textDecoration: "none",
    padding: "0.5rem 1rem",
  };

  const logout = () => {
    authCtx.logout();
    history.push("/");
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
            {isLoggedIn && (
              <NavLink to="/products" style={navLinkStyle}>
                Products
              </NavLink>
            )}

            {!isLoggedIn && (
              <NavLink to="/signin" style={navLinkStyle}>
                Signin
              </NavLink>
            )}
          </Nav>

          {isLoggedIn && (
            <>
              <NavLink to="/logout" onClick={logout} style={navLinkStyle}>
                Logout
              </NavLink>
            </>
          )}

          {isLoggedIn && (
            <Button variant="outline-dark" onClick={toggleModal}>
              Cart: {totalQuantity}
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
