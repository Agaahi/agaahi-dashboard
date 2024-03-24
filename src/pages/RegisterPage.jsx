import React, { useState } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    // Do something with the email and password values (e.g., send them to an API)
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/login");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card border="primary" key="light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="text-black text-center">Register</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label className="text-black">Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label htmlFor="InputPassword5" className="text-black">
                  Password
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  id="inputPassword5"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label htmlFor="InputPassword5" className="text-black">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  id="inputPassword5"
                  placeholder="Password"
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-center">
              <Button type="submit">Register</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterPage;
