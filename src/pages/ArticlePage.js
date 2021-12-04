import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  const otherArticles = articles.filter((article) => article.name !== name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8000/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  return !article ? (
    <NotFoundPage />
  ) : (
    <>
      <h3>{article.title}</h3>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
