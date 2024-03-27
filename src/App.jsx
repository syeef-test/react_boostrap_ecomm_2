import { useContext, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom"; // Import BrowserRouter and Route from react-router-dom
import CartContext from "./store/cart-context";
import Home from "./pages/Home";

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
    <BrowserRouter>
      <h1>Hello</h1>
      <Route path="/" element={<Home />} />
    </BrowserRouter>
  );
}

export default App;
