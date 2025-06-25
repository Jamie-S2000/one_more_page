import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Col, Row, Alert } from "react-bootstrap";
import styles from "../../styles/Forms.module.css";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    book_title: "",
    book_author: "",
    fave_quote: "",
    content: "",
  });

  const { book_title, book_author, fave_quote, content } = postData;

  const navigate = useNavigate();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("book_title", book_title);
    formData.append("book_author", book_author);
    formData.append("fave_quote", fave_quote);
    formData.append("content", content);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      navigate(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleDelete = () => {
    setPostData({
      book_title: "",
      book_author: "",
      fave_quote: "",
      content: "",
    });
  };

  const textFields = (
    <div className="text-center">
      <div className={styles.Div}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            className={styles.Input}
            type="text"
            name="book_title"
            value={book_title}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
      {errors?.book_title?.map((message, idx) => (
        <div className={styles.Div}>
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        </div>
      ))}
      <div className={styles.Div}>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            className={styles.Input}
            type="text"
            name="book_author"
            value={book_author}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
      {errors?.book_author?.map((message, idx) => (
        <div className={styles.Div}>
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        </div>
      ))}
      <div className={styles.Div}>
        <Form.Group>
          <Form.Label>Favorite Quote</Form.Label>
          <Form.Control
            className={styles.Input}
            type="textarea"
            rows={3}
            name="fave_quote"
            value={fave_quote}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
      {errors?.fave_quote?.map((message, idx) => (
        <div className={styles.Div}>
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
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
          />
        </Form.Group>
      </div>
      {errors?.content?.map((message, idx) => (
        <div className={styles.Div}>
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        </div>
      ))}
      <span className={styles.Div}>
        <Button className={styles.Btn} variant="success" type="submit">
          Post
        </Button>
      </span>
      <span className={styles.Div}>
        <Button className={styles.Btn} variant="success" onClick={handleDelete}>
          Delete
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

export default PostCreateForm;
