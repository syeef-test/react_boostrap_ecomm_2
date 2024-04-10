import React, { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const cartContext = useContext(CartContext);

  const mergeItems = (cartItems) => {
    const mergedItems = {};
    cartItems.forEach((item) => {
      const { title, ...rest } = item;
      if (mergedItems[title]) {
        mergedItems[title].quantity += item.quantity;
      } else {
        mergedItems[title] = { ...rest };
      }
    });
    return Object.values(mergedItems);
  };

  const fetchCartHandler = async (userEmail) => {
    try {
      const email = localStorage.getItem("email");
      const sp_removed_email = email.replace(/[@.]/g, "");
      const response = await axios.get(
        `https://crudcrud.com/api/1c8cbaa7cc0b40c783f4b1f0daf287bd/cart${sp_removed_email}`
      );

      //console.log(response.data);
      const mergedCartItems = mergeItems(response.data);
      //console.log("mergedData", mergedCartItems);
      setItems(mergedCartItems);
    } catch (error) {
      console.error("Error fetching cart details:", error);
    }
  };

  const addItemToCartHandler = async (newItem, quantity) => {
    try {
      const email = localStorage.getItem("email");
      const sp_removed_email = email.replace(/[@.]/g, "");

      const imageUrl = newItem.imageUrl;
      const price = newItem.price;
      const quantity = newItem.quantity;
      const title = newItem.title;

      const obj = {
        imageUrl: imageUrl,
        price: price,
        quantity: quantity,
        title: title,
      };

      const response = await axios.post(
        `https://crudcrud.com/api/1c8cbaa7cc0b40c783f4b1f0daf287bd/cart${sp_removed_email}`,
        obj
      );

      if (response.status === 201) {
        console.log("Cart Data inserted");
        //console.log(response);
        alert("Cart Data inserted");
        fetchCartHandler();
      } else {
        console.log("Cart Data not inserted");
        alert("Cart Data not inserted");
      }
    } catch (error) {
      console.error("Error adding cart details:", error);
    }
  };

  const removeItemFromCartHandler = (item, quantity) => {};

  useEffect(() => {
    console.log("cart_context:", items);
  }, [items]);

  const cartContextValue = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    getCartItem: fetchCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
