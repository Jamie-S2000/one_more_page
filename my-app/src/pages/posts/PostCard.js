import React from "react";
import styles from "../../styles/Post.module.css";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";

const PostCard = (props) => {
  const { id, book_title, book_author, fave_quote } = props;

  return (
    <div>
      <NavLink to={`/posts/${id}`}>
        <Card>
          <Card.Body>
            <Card.Title>{book_title}</Card.Title>
            <Card.Text>{book_author}</Card.Text>
            <Card.Text className={styles.Quote}>{fave_quote}</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </div>
  );
};

export default PostCard;
