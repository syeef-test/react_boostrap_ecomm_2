import { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Signin from "./pages/Signin";
import AuthContext from "./store/auth-context";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

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
        {isLoggedIn && (
          <>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/:productId">
              <ProductDetails />
            </Route>
          </>
        )}

        <Route path="">
          <Signin />
        </Route>
      </Switch>

      <Cart isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default App;
