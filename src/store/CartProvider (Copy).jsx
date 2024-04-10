import { useState, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (newItem, quantity) => {
    const existingItemIndex = items.findIndex(
      (item) => item.title === newItem.title
    );

    if (existingItemIndex !== -1) {
      let updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity =
        Number(updatedCartItems[existingItemIndex].quantity) + Number(quantity);
      updateItems(updatedCartItems);
    } else {
      newItem.quantity = Number(quantity);
      updateItems((items) => [...items, newItem]);
    }
  };

  const removeItemFromCartHandler = (prevItem) => {
    let updatedCartItems = [...items];
    const existingItemIndex = items.findIndex(
      (item) => item.title === prevItem.title
    );

    if (existingItemIndex !== -1) {
      let updatedQuantity = updatedCartItems[existingItemIndex].quantity;

      if (updatedQuantity > 1) {
        updatedQuantity -= 1;
        updatedCartItems[existingItemIndex].quantity = updatedQuantity;
        updateItems(updatedCartItems);
      } else {
        const updatedItems = updatedCartItems.filter(
          (_, index) => index !== existingItemIndex
        );
        updateItems(updatedItems);
      }
    }
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  useEffect(() => {
    console.log("cart_context:", items);
  }, [items]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
