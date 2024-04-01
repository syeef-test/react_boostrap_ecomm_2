import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

function ContactUs() {
  const formDataRef = useRef({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    formDataRef.current[name] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://react-contact-us-fa419-default-rtdb.firebaseio.com/contact-us.json",
        formDataRef.current
      );
      if (data) {
        alert("Data stored successfully!");
        console.log("Data stored successfully!");
      }

      formDataRef.current = {
        name: "",
        email: "",
        phone: "",
      };
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h3>Contact Us</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={formDataRef.current.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              defaultValue={formDataRef.current.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Enter phone number</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              defaultValue={formDataRef.current.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default ContactUs;
