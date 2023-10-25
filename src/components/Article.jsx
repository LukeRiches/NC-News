import { useEffect, useState } from "react";
import axios from "axios";
import ArticlesCard from "./ArticlesCard";
import { Outlet } from "react-router-dom";

function Article({ articleID, isLoading, setIsLoading, error, setError }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}`
      )
      .then(({ data }) => {
        setIsLoading(false);
        setError(null);
        setArticle(data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [articleID]);

  return (
    <main className="Article">
      <h2>Article</h2>
      <ArticlesCard article={article}  isLoading={isLoading} setIsLoading={setIsLoading} error={error} setError={setError} ></ArticlesCard>
      <Outlet />
    </main>
  );
}

export default Article;
