import React from "react";
import { Link } from "react-router-dom";
import formStyles from "../../styles/Forms.module.css";

function Comment({ owner, content }) {
  return (
    <div className={formStyles.Div}>
      <Link className={formStyles.Link} to={`/profiles/${owner}`}>{owner}</Link>: {content}
    </div>
  );
}

export default Comment;