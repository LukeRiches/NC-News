import { useState, useEffect } from "react";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function ArticlesSearch({
  setArticlesArray,
  setArticlesLength,
  setLimit,
  limit,
  setP,
  p,
  isLoading,
  setIsLoading,
  error,
  setError,
  searchParams,
  setSearchParams,
  isLightMode,
  isDarkMode,
}) {
  const [topicsList, setTopicsList] = useState([]);

  const [topic, setTopic] = useState(searchParams.get("topic") || "");

  const [sortBy, setSortBy] = useState(
    searchParams.get("sort_by") || "created_at"
  );

  const [order, setOrder] = useState(searchParams.get("order") || "desc");

  function topicOnChange(event) {
    const value = event.target.value;
    setP(1);
    setTopic(value);
    setSearchParams(
      (previous) => {
        previous.set("topic", event.target.value);
        return previous;
      },
      { replace: true }
    );
  }

  function sortByOnChange(event) {
    const value = event.target.value;
    setSortBy(value);
    setSearchParams(
      (previous) => {
        previous.set("sort_by", event.target.value);
        return previous;
      },
      { replace: true }
    );
  }

  function orderOnChange(event) {
    const value = event.target.value;
    setOrder(value);
    setSearchParams(
      (previous) => {
        previous.set("order", event.target.value);
        return previous;
      },
      { replace: true }
    );
  }

  function resetSearch() {
    setTopic("");
    setSearchParams(
      (previous) => {
        previous.set("topic", "");
        return previous;
      },
      { replace: true }
    );
    setSortBy("created_at");
    setSearchParams(
      (previous) => {
        previous.set("sort_by", "created_at");
        return previous;
      },
      { replace: true }
    );
    setOrder("desc");
    setSearchParams(
      (previous) => {
        previous.set("order", "desc");
        return previous;
      },
      { replace: true }
    );
    setLimit(10);
    setSearchParams(
      (previous) => {
        previous.set("limit", 10);
        return previous;
      },
      { replace: true }
    );
    setP(1);
    setSearchParams(
      (previous) => {
        previous.set("p", 1);
        return previous;
      },
      { replace: true }
    );
  }

  function getTopics() {
    return axios
      .get(`https://northcoders-news-api-phe8.onrender.com/api/topics`)
      .then(({ data }) => {
        setTopicsList(data);
      })
      .catch((err) => {
        setError(err.response);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then(() => {
        return axios.get(
          `https://northcoders-news-api-phe8.onrender.com/api/articles?topic=${topic}&sort_by=${sortBy}&order=${order}&limit=${limit}&p=${p}`
        );
      })
      .then(({ data }) => {
        setIsLoading(false);
        setError(null);
        setArticlesArray(data.articles);
        setArticlesLength(data.total_count);
      })
      .catch((err) => {
        setError(err.response);
        setIsLoading(false);
      });
  }, [topic, sortBy, order, limit, p]);
  if (isLoading && isLightMode) {
    return (
      <div>
        <h3>Loading Articles...</h3>
        <SyncLoader
          className="Loader"
          color="#4b89ef"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  }
  if (isLoading && isDarkMode) {
    return (
      <div>
        <h3>Loading Articles...</h3>
        <SyncLoader
          className="Loader"
          color="#ef5f4b"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  } else {
    return (
      <section id="Search">
        <form action="">
          <section className="search">
            <label htmlFor="topic">Topics:</label>
            <select
              name="topic"
              id="topic"
              value={topic}
              onChange={topicOnChange}
              className="searchOptions"
            >
              <option value="">View All</option>
              {topicsList.map((topic) => {
                return (
                  <option value={topic.slug} key={topic.slug}>
                    {topic.slug}
                  </option>
                );
              })}
            </select>
          </section>

          <section className="search">
            <label htmlFor="sort_by">Sort By: </label>
            <select
              name="sort_by"
              id="sort_by"
              onChange={sortByOnChange}
              value={sortBy}
              className="searchOptions"
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
            <label htmlFor="order">Order: </label>
            <select
              name="order"
              id="order"
              onChange={orderOnChange}
              value={order}
              className="searchOptions"
            >
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </section>
          <button onClick={resetSearch} className="reset">
            Reset
          </button>
        </form>
      </section>
    );
  }
}

export default ArticlesSearch;
