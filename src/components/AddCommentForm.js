import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(
      `http://localhost:8000/api/articles/${articleName}/add-comment`,
      {
        method: "POST",
        body: JSON.stringify({
          username,
          text: commentText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        name:
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Comment:
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows="4"
          cols="50"
        />
      </label>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
