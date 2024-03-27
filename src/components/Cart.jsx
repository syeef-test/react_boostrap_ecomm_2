import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import CartContext from "../store/cart-context";

function Cart({ isOpen, onClose }) {
  if (!isOpen) return null;

  const cartContext = useContext(CartContext);

  const handleRemoveItem = (item) => {
    cartContext.removeItem(item);
  };

  return ReactDOM.createPortal(
    <>
      <Modal.Dialog
        style={{
          position: "fixed",
          top: 80,
          right: 0,
          bottom: 0,
          width: "300px",
        }}
      >
        <Modal.Header>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {cartContext.items.map((item) => (
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
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <Button variant="danger" onClick={() => handleRemoveItem(item)}>
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
