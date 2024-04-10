import { useContext, useState, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import AuthContext from "./store/auth-context";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const Header = lazy(() => import("./components/Header"));
const Cart = lazy(() => import("./components/Cart"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Signin = lazy(() => import("./pages/Signin"));

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
          <Suspense fallback={<p>Loading....</p>}>
            <Home />
          </Suspense>
        </Route>
        <Route path="/about">
          <Suspense fallback={<p>Loading....</p>}>
            <AboutPage />
          </Suspense>
        </Route>
        <Route path="/contactus">
          <Suspense fallback={<p>Loading....</p>}>
            <ContactUs />
          </Suspense>
        </Route>
        {isLoggedIn && (
          <>
            <Suspense fallback={<p>Loading....</p>}>
              <Route path="/products" exact>
                <Products />
              </Route>
            </Suspense>
            <Suspense fallback={<p>Loading....</p>}>
              <Route path="/products/:productId">
                <ProductDetails />
              </Route>
            </Suspense>
          </>
        )}

        <Route path="">
          <Suspense fallback={<p>Loading....</p>}>
            <Signin />
          </Suspense>
        </Route>
      </Switch>
      <Suspense fallback={<p>Loading....</p>}>
        <Cart isOpen={isModalOpen} onClose={toggleModal} />
      </Suspense>
    </>
  );
}

export default App;
