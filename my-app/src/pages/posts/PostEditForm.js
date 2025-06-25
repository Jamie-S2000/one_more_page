import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container, Col, Row, Alert } from "react-bootstrap";
import styles from "../../styles/Forms.module.css";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";

function PostEditForm() {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    book_title: "",
    book_author: "",
    fave_quote: "",
    content: "",
  });

  const { book_title, book_author, fave_quote, content } = postData;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}`);
        setPostData({
          book_title: data.book_title,
          book_author: data.book_author,
          fave_quote: data.fave_quote,
          content: data.content,
        });
      } catch (err) {
        navigate("/");
      }
    };
    fetchPost();
  }, [id, navigate]);

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
      await axiosReq.put(`/posts/${id}/`, formData);
      navigate(`/posts/${id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleCancel = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className={`${appStyles.Content}`}>
        <Col className="my-auto" lg={6}>
          <Container>
            <h1>Edit Post</h1>
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
            {errors.book_title?.map((message, idx) => (
              <div className={styles.Div} key={idx}>
                <Alert variant="warning">{message}</Alert>
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
            {errors.book_author?.map((message, idx) => (
              <div className={styles.Div} key={idx}>
                <Alert variant="warning">{message}</Alert>
              </div>
            ))}
            <div className={styles.Div}>
              <Form.Group>
                <Form.Label>Favorite Quote</Form.Label>
                <Form.Control
                  className={styles.Input}
                  as="textarea"
                  rows={3}
                  name="fave_quote"
                  value={fave_quote}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            {errors.fave_quote?.map((message, idx) => (
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
                />
              </Form.Group>
            </div>
            {errors.content?.map((message, idx) => (
              <div className={styles.Div} key={idx}>
                <Alert variant="warning">{message}</Alert>
              </div>
            ))}
            <div className={styles.Div}>
              <Button className={styles.Btn} variant="success" type="submit">
                Save
              </Button>
              <Button
                className={styles.Btn}
                variant="secondary"
                onClick={handleCancel}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </Button>
            </div>
            {errors.non_field_errors?.map((message, idx) => (
              <div className={styles.Div} key={idx}>
                <Alert variant="warning">{message}</Alert>
              </div>
            ))}
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostEditForm;
