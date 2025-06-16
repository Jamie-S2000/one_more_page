import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = registerData;

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration", registerData);
      navigate("/login");
    } catch (err) {
      console.log("Registration error:", err.response?.data);
      setErrors(err.response?.data);
    }
  };

  return (
    <div>
      <Container>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.username?.map((message, idx) => (
            <Alert variant="warning" key={idx}>{message}</Alert>
          ))}

          <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password1"
              value={password1}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={handleChange}
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
