import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
    review: "Good Product",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
    review: "Good Product",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
    review: "Good Product",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
    review: "Good Product",
  },
];

function Products() {
  return (
    <>
      <section>
        <h1>The Products Page</h1>
        <Container>
          <Row>
            {productsArr.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ margin: "10px 0" }}>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Card.Text>Review: {product.review}</Card.Text>
                    <Button onClick={() => addToCartHandler(product)}>
                      Add to Cart
                    </Button>

                    <Link to={`/products/${product.title}`}>View Details</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Products;
