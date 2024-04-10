import React, { useState, useRef, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const key = import.meta.env.VITE_FIREBASE_APP_ID;

    // console.log(email, password, key);
    try {
      setLoading(true);
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
        {
          email: email,
          password: password,
        }
      );

      //console.log(response);

      if (response.status === 200) {
        authCtx.login(response.data.idToken);
        console.log(response.data.idToken);
        alert("Sign In Succesful");
        //localStorage.setItem("email", email);

        history.replace("/products");
      }

      console.log("User signed in successfully!");
    } catch (error) {
      //console.log(error);
      console.log(error.response.data.error.message);
      // console.error("Error signing in:", error.message);
      alert(error.response.data.error.message);
    } finally {
      setLoading(false);
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div>
        <h3>Sign In</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Enter password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Signin;
