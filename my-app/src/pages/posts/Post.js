import React from "react";
import styles from "../../styles/Post.module.css";
import formStyles from "../../styles/Forms.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Post = (props) => {
  const {
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
      <div className={formStyles.Div}>
        <h1>{book_title}</h1>
      </div>
      <div className={formStyles.Div}>
        <h3>by {book_author}</h3>
      </div>
      <div className={formStyles.Div}>
        <p className={styles.Quote}>{fave_quote}</p>
      </div>
      <div className={formStyles.Div}>
        <p>{content}</p>
      </div>
      <div className={formStyles.Div}>
        <NavLink to={`/profiles/${profile_id}`} className={formStyles.Link}>
          Created by {owner}
        </NavLink>
      </div>
      <div>
        {is_owner && postPage && (
          <div>
            <NavLink to={`/posts/${props.id}/edit`}>
              <Button className={formStyles.Btn} variant="success">
                Edit
              </Button>
            </NavLink>
            <Button
              className={formStyles.Btn}
              variant="danger"
              onClick={props.handleDelete}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
