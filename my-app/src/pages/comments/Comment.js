import React from "react";
import formStyles from "../../styles/Forms.module.css";

function Comment({ owner, content }) {
  return (
    <div className={formStyles.Div}>
      {owner}: {content}
    </div>
  );
}

export default Comment;