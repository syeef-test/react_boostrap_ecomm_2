import React from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

function Cart({ isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Modal.Dialog
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "300px",
        }}
      >
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h1>
            {cartElements.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
              </div>
            ))}
          </h1>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>,
    document.getElementById("modal-root")
  );
}

export default Cart;
