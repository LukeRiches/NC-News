import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faFire,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticlesList from "./ArticlesList";
import { SyncLoader } from "react-spinners";

function Home({ isLightMode, isDarkMode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mostLikedArticlesArray, setMostLikedArticlesArray] = useState([]);
  const [mostCommentedArticlesArray, setMostCommentedArticlesArray] = useState(
    []
  );

  Promise.all([
    axios.get(
      `https://northcoders-news-api-phe8.onrender.com/api/articles?sort_by=votes&limit=10`
    ),
    axios.get(
      `https://northcoders-news-api-phe8.onrender.com/api/articles?sort_by=comment_count&limit=10`
    ),
  ])
    .then((data) => {
      setIsLoading(false);
      setError(null);
      setMostLikedArticlesArray(data[0].data.articles);
      setMostCommentedArticlesArray(data[1].data.articles);
    })
    .catch((err) => {
      setError(err.response);
      setIsLoading(false);
    });

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
      <main className="Home">
        <h2>
          Trending <FontAwesomeIcon icon={faFire} className="Home-Icons" />
        </h2>

        <section>
          <h3>
            Most Liked Posts{" "}
            <FontAwesomeIcon icon={faThumbsUp} className="Home-Icons" />
          </h3>
          <ArticlesList
            articlesArray={mostLikedArticlesArray}
            isLoading={isLoading}
            error={error}
          />
        </section>

        <section>
          <h3>
            Most Commented Posts{" "}
            <FontAwesomeIcon icon={faComments} className="Home-Icons" />{" "}
            <ArticlesList
              articlesArray={mostCommentedArticlesArray}
              isLoading={isLoading}
              error={error}
            />
          </h3>
        </section>
      </main>
    );
  }
}

export default Home;
