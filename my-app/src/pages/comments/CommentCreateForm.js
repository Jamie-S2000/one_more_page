import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import formStyles from "../../styles/Forms.module.css";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {}
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <div className={formStyles.Div}>
        <Form.Group>
          <InputGroup>
            <Form.Control
              className={formStyles.Input}
              placeholder="comment"
              as="textarea"
              value={content}
              onChange={handleChange}
              rows={2}
            />
          </InputGroup>
        </Form.Group>
      </div>
      <div className={formStyles.Div}>
        <Button
          className={formStyles.Btn}
          disabled={!content.trim()}
          type="submit"
          variant="success"
        >
          Post
        </Button>
      </div>
    </Form>
  );
}

export default CommentCreateForm;
