import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axiosReq.delete(`/posts/${id}/`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row className={`${appStyles.Content}`}>
      <Col className="my-auto" lg={6}>
        <Container>
          <Post
            {...post.results[0]}
            setPosts={setPost}
            postPage
            handleDelete={handleDelete}
          />
        </Container>
      </Col>
    </Row>
  );
}

export default PostPage;
