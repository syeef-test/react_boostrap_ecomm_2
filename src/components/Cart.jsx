import React from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

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
          <h1>Cart Items</h1>
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
