import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Header toggleModal={toggleModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Cart isOpen={isModalOpen} onClose={toggleModal} />
      </BrowserRouter>
    </>
  );
}

export default App;
