import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Button, Container, Alert, Col, Row } from "react-bootstrap";
import axios from "axios";
import styles from "../../styles/Forms.module.css";
import appStyles from "../../App.module.css";

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
      await axios.post("/dj-rest-auth/registration/", registerData);
      navigate("/login");
    } catch (err) {
      console.log("Registration error:", err.response?.data);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={`${appStyles.Content}`}>
      <Col className="my-auto" lg={6}>
        <Container>
          <h1>Register</h1>
          <Form onSubmit={handleSubmit}>
            <div className={styles.Div}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            {errors.username?.map((message, idx) => (
              <div className={styles.Div}>
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              </div>
            ))}

            <div className={styles.Div}>
              <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            {errors.password1?.map((message, idx) => (
              <div className={styles.Div}>
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              </div>
            ))}
            <div className={styles.Div}>
              <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            {errors.password2?.map((message, idx) => (
              <div className={styles.Div}>
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              </div>
            ))}
            <div className={styles.Div}>
              <Button className={styles.Btn} variant="success" type="submit">
                Register
              </Button>
            </div>
            {errors.non_field_errors?.map((message, idx) => (
              <div className={styles.Div}>
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              </div>
            ))}
          </Form>
        </Container>
        <Container>
          <div className={styles.Div}>
            <Link className={styles.Link} to="/login">Already registered? Log in here</Link>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default Register;
