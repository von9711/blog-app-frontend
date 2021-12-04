import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(
      `http://localhost:8000/api/articles/${articleName}/upvotes`,
      {
        method: "POST",
      }
    );
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div className="upvotes-section">
      <button onClick={upvoteArticle}>Add Upvote</button>
      <p>This post has been upvoted {upvotes} times</p>
    </div>
  );
};

export default UpvotesSection;
