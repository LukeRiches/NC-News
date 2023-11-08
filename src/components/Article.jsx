import { useEffect, useState } from "react";
import axios from "axios";
import ArticlesCard from "./ArticlesCard";
import { Link, Outlet, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { SyncLoader } from "react-spinners";

function Article({ user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});
  const [currentVotes, setCurrentVotes] = useState(null);
  const [currentVotesBeforeChanges, setCurrentVotesBeforeChanges] =
    useState(null);
  const [commented, setCommented] = useState(0);
  const [deletedComment, setDeletedComment] = useState(0);
  const { articleID } = useParams();

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
        setCurrentVotes(data.votes);
        setCurrentVotesBeforeChanges(data.votes);
      })
      .catch((err) => {
        setError(err.response);
        setIsLoading(false);
      });
  }, [articleID, commented, deletedComment]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (articleID === null) {
    return (
      <p>
        Individual Articles can only be accessed from within{" "}
        <Link to="/articles">Articles</Link>
      </p>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading Article...</h2>
        <SyncLoader
          color="#36d7b7"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  }

  return (
    <main className="Article">
      <h2>Article</h2>
      <ArticlesCard
        article={article}
        currentVotesBeforeChanges={currentVotesBeforeChanges}
        currentVotes={currentVotes}
        setCurrentVotes={setCurrentVotes}
        user={user}
      ></ArticlesCard>
      <Outlet
        context={[commented, setCommented, deletedComment, setDeletedComment]}
      />
    </main>
  );
}

export default Article;
