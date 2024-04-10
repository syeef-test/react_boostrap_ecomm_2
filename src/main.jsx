import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "../node_modules/react-bootstrap/dist/react-bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./store/CartProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
