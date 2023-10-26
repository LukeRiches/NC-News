import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function ArticlesSearch({
  setArticlesArray,
  setArticlesLength,
  limit,
  p,
  isLoading,
  setIsLoading,
  error,
  setError,
}) {
  let [searchParams, setSearchParams] = useSearchParams();

  const [topic, setTopic] = useState(searchParams.get("topic") || "");

  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "created_at");

  const [order, setOrder] = useState(searchParams.get("order") ||"desc");

  function topicOnChange(event) {
    const value = event.target.value;
    setTopic(value);
  }

  function sortByOnChange(event) {
    const value = event.target.value;
    setSortBy(value);
  }

  function orderOnChange(event) {
    const value = event.target.value;
    setOrder(value);
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://northcoders-news-api-phe8.onrender.com/api/articles?topic=${topic}&sort_by=${sortBy}&order=${order}&limit=${limit}&p=${p}`
      )
      .then(({ data }) => {
        console.log(data);
        setIsLoading(false);
        setError(null);
        setArticlesArray(data.articles);
        setArticlesLength(data.total_count);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [topic, sortBy, order, limit, p]);


  return (
    <search>
      <form action="">
        <section className="search">
          <label htmlFor="Search">Search for a topic:</label>
          <input
            type="text"
            name="Search"
            id="Search"
            value={topic}
            onChange={topicOnChange}
          />
        </section>

        <section className="search">
          <label htmlFor="SortBy">SortBy</label>
          <select
            name="SortBy"
            id="SortBy"
            onChange={sortByOnChange}
            value={sortBy}
          >
            <option value="author">Author</option>
            <option value="comment_count">Comment Count</option>
            <option value="created_at">Created At</option>
            <option value="title">Title</option>
            <option value="topic">Topic</option>
            <option value="votes">Votes</option>
          </select>
        </section>

        <section className="search">
          <label htmlFor="Order">Order</label>
          <select
            name="Order"
            id="Order"
            onChange={orderOnChange}
            value={order}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </section>
      </form>
    </search>
  );
}

export default ArticlesSearch;
