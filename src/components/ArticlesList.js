import React from "react";
import { Link as RouteLink } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <RouteLink key={index} to={`/article/${article.name}`}>
          <h3>{article.name} </h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </RouteLink>
      ))}
    </>
  );
};

export default ArticlesList;
