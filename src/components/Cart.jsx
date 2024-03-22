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
        <Modal.Header>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {cartElements.map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <div>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveItem(item.title)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
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
