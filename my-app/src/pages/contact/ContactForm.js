import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Col, Row, Alert } from "react-bootstrap";
import styles from "../../styles/Forms.module.css";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ContactForm() {
  const currentUser = useCurrentUser();
  const [errors, setErrors] = useState({});
  const [contactData, setContactData] = useState({
    email: "",
    content: "",
  });

  const { email, content } = contactData;
  const navigate = useNavigate();

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/contact/", { email, content });
      navigate("/");
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  if (!currentUser) {
    return (
      <Row className={`${appStyles.Content}`}>
        <Col className="my-auto" lg={6}>
          <Container>
            <div className={styles.Div}>
              <Alert variant="warning">
                You must be logged in to use the contact form.
              </Alert>
            </div>
          </Container>
        </Col>
      </Row>
    );
  }

  const textFields = (
    <div className="text-center">
      <div className={styles.Div}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={styles.Input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </div>
      {errors?.email?.map((message, idx) => (
        <div className={styles.Div} key={idx}>
          <Alert variant="warning">{message}</Alert>
        </div>
      ))}
      <div className={styles.Div}>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            className={styles.Input}
            as="textarea"
            rows={6}
            name="content"
            value={content}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </div>
      {errors?.content?.map((message, idx) => (
        <div className={styles.Div} key={idx}>
          <Alert variant="warning">{message}</Alert>
        </div>
      ))}
      <span className={styles.Div}>
        <Button className={styles.Btn} variant="success" type="submit">
          Send
        </Button>
      </span>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row className={`${appStyles.Content}`}>
        <Col className="my-auto" lg={6}>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ContactForm;
