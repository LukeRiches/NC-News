import { Link } from "react-router-dom";
import Comments from "./Comments";

function ArticlesCard({
  article,
  setArticleID,
  isLoading,
  setIsLoading,
  error,
  setError,
}) {
  // let { path, url } = useRouteMatch();

  if (article.author === undefined) {
    return <p>Loading...</p>;
  }
  if (article.body) {
    return (
      <main>
        {/* <p>Article ID: {article.article_id}</p> */}
        <div className="Top">
          <h3>{article.topic}</h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
          <p>Created at: {article.created_at}</p>
        </div>
        <div>
          <p>Body: {article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>

        <div className="Bottom">
          <p>votes: {article.votes}</p>
          <Link to="comments">
            <button
            >
              💬 {article.comment_count}
            </button>
          </Link>
        </div>
      </main>
    );
  } else {
    return (
      <li>
        <div>
          <div className="Top">
            <h3>{article.topic}</h3>
            <h4>{article.title}</h4>
            <p>Author: {article.author}</p>
            <p>Created at: {article.created_at}</p>
          </div>

          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />

          <div className="Bottom">
            <p>votes: {article.votes}</p>
            <p>Comment Count: {article.comment_count}</p>
          </div>
        </div>
        <Link to="/article">
          <button
            onClick={() => {
              setArticleID(article.article_id);
            }}
          >
            View Article
          </button>
        </Link>
      </li>
    );
  }
}

export default ArticlesCard;
