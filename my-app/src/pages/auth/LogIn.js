import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Button, Container, Alert, Col, Row } from "react-bootstrap";
import axios from "axios";
import styles from "../../styles/Forms.module.css";
import appStyles from "../../App.module.css";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function LogIn() {
  const setCurrentUser = useSetCurrentUser();

  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = logInData;

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("dj-rest-auth/login/", logInData);
      setCurrentUser(data.user);
      navigate("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Row className={`${appStyles.Content}`}>
      <Col className="my-auto" lg={6}>
        <Container>
          <h1>Log In</h1>
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
              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            {errors.password?.map((message, idx) => (
              <div className={styles.Div}>
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              </div>
            ))}
            <div className={styles.Div}>
              <Button className={styles.Btn} variant="success" type="submit">
                Log In
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
            <Link className={styles.Link} to="/register">
              Dont have an account? Register here
            </Link>
          </div>
        </Container>
      </Col>
    </Row>
  );
}

export default LogIn;
