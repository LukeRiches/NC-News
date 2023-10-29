import { useEffect, useState } from "react";
import axios from "axios";
import ArticlesCard from "./ArticlesCard";
import { Link, Outlet, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function Article({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});
  const [currentVotes, setCurrentVotes] = useState(null);
  const [currentVotesBeforeChanges, setCurrentVotesBeforeChanges] = useState(null);
  const [commented, setCommented] = useState(0)
  const [deletedComment, setDeletedComment] = useState(0)
  const { articleID } = useParams();

  // console.log(deletedComment);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}`
      )
      .then(({ data }) => {
        setIsLoading(false);
        if (data.msg) {
          setError(data.msg)
        } else {
          setError(null);
          setArticle(data);
          setCurrentVotes(data.votes);
          setCurrentVotesBeforeChanges(data.votes);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [articleID, commented, deletedComment]);

  if (articleID === null) {
    return (
      <p>
        Individual Articles can only be accessed from within{" "}
        <Link to="/articles">Articles</Link>
      </p>
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
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        error={error}
        setError={setError}
      ></ArticlesCard>
      <Outlet context={[commented, setCommented, deletedComment, setDeletedComment]}/>
    </main>
  );
}

export default Article;
