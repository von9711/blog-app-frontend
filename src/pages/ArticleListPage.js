import React from "react";
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticleListPage = () => {
  return (
    <>
      <h1>Article List</h1>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticleListPage;
