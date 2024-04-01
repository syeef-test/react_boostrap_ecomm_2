import { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ContactUs from "./pages/ContactUs";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header toggleModal={toggleModal} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>

      <Cart isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default App;
