import { Link } from "react-router-dom";

function ArticlesCard({ article, setArticleID }) {
  if (article.body) {
    return (
      <main>
      {/* <p>Article ID: {article.article_id}</p> */}
      <div className="Top">
        <h3>{article.topic}</h3>
        <h4>{article.title}</h4>
        <p>Author: {article.author}</p>
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
        <p>Comment Count: {article.comment_count}</p>
        <p>Created at: {article.created_at}</p>
      </div>
    </main>
    )
    
  } else {
    return (
      <li>
        <div>
          <div className="Top">
            <h3>{article.topic}</h3>
            <h4>{article.title}</h4>
            <p>Author: {article.author}</p>
          </div>

          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />

          <div className="Bottom">
            <p>votes: {article.votes}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Created at: {article.created_at}</p>
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
