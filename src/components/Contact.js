import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validation to check if any field is empty
    if (!name || !email || !message) {
      setError(true);
      setTimeout(() => setError(false), 3000); // Hide error message after 3 seconds
      return;
    }

    setSuccess(true); // Show success message
    setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds

    setFormData({ name: "", email: "", message: "" }); // Reset the form
  };

  return (
    <Container
      className="py-5"
      style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}
    >
      <Row className="justify-content-center">
        <Col md={6}>
          <Card
            style={{
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Body>
              <h2
                className="text-center mb-4"
                style={{ color: "#2c3e50", fontWeight: 700 }}
              >
                Contact Us
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontWeight: 600 }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontWeight: 600 }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label style={{ fontWeight: 600 }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="success"
                  style={{ padding: "10px 20px", fontSize: "1rem" }}
                >
                  Submit
                </Button>
              </Form>
              {error && (
                <Alert variant="danger" className="mt-4">
                  Please fill out all fields before submitting!
                </Alert>
              )}
              {success && (
                <Alert variant="success" className="mt-4">
                  Message sent successfully!
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
