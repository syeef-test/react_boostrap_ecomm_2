import { useContext, useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Cart from "./components/Cart";
import CartContext from "./store/cart-context";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const productsArr = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//   },

//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//   },

//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//   },

//   {
//     title: "Blue Color",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//   },
// ];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartContext = useContext(CartContext);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addItemHandler = (item) => {
    cartContext.addItem(item, 1);
  };

  return (
    <>
      <Router>
        {/* <Header toggleModal={toggleModal} /> */}

        {/* <Container>
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
                        <Button
                          variant="info"
                          onClick={() => addItemHandler(item)}
                        >
                          Add To Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </ul>
        </Container> */}
        {/* <Container>
          <Button>See the cart</Button>
        </Container> */}
        {/* <Container>
        <h4>The Generics</h4>
      </Container> */}

        {/* <Cart isOpen={isModalOpen} onClose={toggleModal} /> */}

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
