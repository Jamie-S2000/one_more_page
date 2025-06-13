import React from "react";
import { Link } from "react-router-dom";

import { Form, Button, Container } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <Container>
        <h1>Register</h1>
        <Form>
          <Form.Group controlId="username">
            <Form.Label className="d-none">username</Form.Label>
            <Form.Control type="text" placeholder="username" name="username" />
          </Form.Group>

          <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password1"
            />
          </Form.Group>

          <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="password2"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
      <Container>
        <Link to="/login">Already registered? Log in here</Link>
      </Container>
    </div>
  );
};

export default Register;
