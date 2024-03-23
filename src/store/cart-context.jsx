import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item, quantity) => {},
  removeItem: (item, quantity) => {},
});

export default CartContext;
