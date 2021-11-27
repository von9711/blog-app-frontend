import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  const otherArticles = articles.filter((article) => article.name !== name);

  return !article ? (
    <NotFoundPage />
  ) : (
    <>
      <h1>Article Page: {name}</h1>
      <h3>{article.title}</h3>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
