import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import appStyles from "../../App.module.css";
import formStyles from "../../styles/Forms.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import CommentCreateForm from "../comments/CommentcreateForm";
import Comment from "../comments/Comment";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const [comments, setComments] = useState({ results: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
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
          {post.results.length > 0 && (
            <>
              <Post
                {...post.results[0]}
                setPosts={setPost}
                postPage
                handleDelete={handleDelete}
              />
              {currentUser && (
                <CommentCreateForm
                  post={id}
                  setPost={setPost}
                  setComments={setComments}
                />
              )}
            </>
          )}
          <InfiniteScroll
            dataLength={comments.results.length}
            next={() => fetchMoreData(comments, setComments)}
            hasMore={!!comments.next}
          >
            {comments.results.length ? (
              comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  owner={comment.owner}
                  content={comment.content}
                />
              ))
            ) : (
              <div className={formStyles.Div}>No comments yet.</div>
            )}
          </InfiniteScroll>
        </Container>
      </Col>
    </Row>
  );
}

export default PostPage;
