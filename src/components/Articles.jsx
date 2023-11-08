import { useEffect, useState } from "react";
import axios from "axios";
import ArticlesSearch from "./ArticlesSearch";
import ArticlesList from "./ArticlesList";
import Pagination from "./pagination";
import ErrorPage from "./ErrorPage";
import { useSearchParams } from "react-router-dom";

function Articles({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articlesArray, setArticlesArray] = useState([]);
  const [articlesLength, setArticlesLength] = useState(0);
  const [limit, setLimit] = useState(10);
  const [p, setP] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <main className="Articles">
      <h2>Articles</h2>
      <ArticlesSearch
        setArticlesArray={setArticlesArray}
        setArticlesLength={setArticlesLength}
        setLimit={setLimit}
        limit={limit}
        setP={setP}
        p={p}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        error={error}
        setError={setError}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        // topicsList={topicsList}
      />
      <ArticlesList
        articlesArray={articlesArray}
        isLoading={isLoading}
        error={error}
      />
      <Pagination
        articlesLength={articlesLength}
        limit={limit}
        setLimit={setLimit}
        p={p}
        setP={setP}
        isLoading={isLoading}
        error={error}
        setSearchParams={setSearchParams}
      />
    </main>
  );
}

export default Articles;
