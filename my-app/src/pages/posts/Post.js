import React from "react";
import appStyles from "../../App.module.css";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    book_title,
    book_author,
    fave_quote,
    content,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  return (
    <div>
      <h1>{book_title}</h1>
      <h3>by {book_author}</h3>
      <p className={styles.Quote}>{fave_quote}</p>
      <p>{content}</p>
      <NavLink to={`/profiles/${profile_id}`}>Created by {owner}</NavLink>
      <div>{is_owner && postPage && "..."}</div>
    </div>
  );
};

export default Post;
