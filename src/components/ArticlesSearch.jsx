import { useState, useEffect } from "react";
import axios from "axios";

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
  const [topic, setTopic] = useState("");

  const [sortBy, setSortBy] = useState("created_at");

  const [order, setOrder] = useState("desc");

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
        setIsLoading(false);
        setError(null);
        setArticlesArray(data.articles);
        setArticlesLength(data.total_count);
      })
      .catch((err) => {
        setError(err);
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
            <option value="article_id">article_id</option>
            <option value="title">title</option>
            <option value="topic">topic</option>
            <option value="author">author</option>
            <option value="created_at">created_at</option>
            <option value="article_img_url">article_img_url</option>
            <option value="votes">votes</option>
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
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </section>
      </form>
    </search>
  );
}

export default ArticlesSearch;
