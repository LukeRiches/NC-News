import { Link } from "react-router-dom";
import Comments from "./Comments";
import axios from "axios";
import { useState } from "react";

function ArticlesCard({
  article,
  setArticleID,
  isLoading,
  setIsLoading,
  error,
  setError,
  currentVotes, 
  setCurrentVotes,
  currentVotesBeforeChanges
}) {

  // console.log(currentVotes);
  // console.log(currentVotesBeforeChanges);

  function upVote(){
    setCurrentVotes((currentCount) => currentCount + 1);
    setError(null)
    axios
    .patch(`https://northcoders-news-api-phe8.onrender.com/api/articles/${article.article_id}`, {"inc_votes": 1})
    .then(({data})=>{
    })
    .catch((error)=>{
      setCurrentVotes((currentCount) => currentCount - 1);
      setError('Something went wrong, please try again.');
    })
  }

  function downVote(){
    setCurrentVotes((currentCount) => currentCount - 1);
    setError(null)
    axios
    .patch(`https://northcoders-news-api-phe8.onrender.com/api/articles/${article.article_id}`, {"inc_votes": -1})
    .then(({data})=>{
    })
    .catch((error)=>{
      console.log(error);
      setCurrentVotes((currentCount) => currentCount + 1);
      setError('Something went wrong, please try again.');
    })
  }

  if (article.author === undefined) {
    return <p>Loading...</p>;
  }
    if (article.body && currentVotes === currentVotesBeforeChanges) {
    return (
      <main>
        <div className="Top">
          <h3>{article.topic}</h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
          {/* <p>Created at: {article.created_at}</p> */}
        </div>
        <div>
          <p className="Body">Body: {article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>

        <div className="Bottom">
          <section className="Voting">
          {error ? <p>{error}</p> : null}
          <p>votes: {currentVotes}</p>
          <button className="vote" onClick={upVote}>👍</button>
          <button className="vote" onClick={downVote} >👎</button>
          </section>

          <Link to="comments">
            <button className="Comments"
            >
              💬 {article.comment_count}
            </button>
          </Link>
          <section>Created: {(article.created_at).slice(0,10)}</section>
        </div>
      </main>
    );
  }
  if(currentVotes !== currentVotesBeforeChanges && currentVotes === (currentVotesBeforeChanges + 1)){
    return (
      <main>
        <div className="Top">
          <h3>{article.topic}</h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">Body: {article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>

        <div className="Bottom">
          <section className="Voting">
          {error ? <p>{error}</p> : null}
          <p>votes: {currentVotes}</p>
          <button className="vote" onClick={downVote}>👎</button>
          </section>

          <Link to="comments">
            <button
            >
              💬 {article.comment_count}
            </button>
          </Link>
          <section>Created: {(article.created_at).slice(0,10)}</section>
        </div>
      </main>
    );
  }
  if(currentVotes !== currentVotesBeforeChanges && currentVotes === (currentVotesBeforeChanges - 1)){
    return (
      <main>
        <div className="Top">
          <h3>{article.topic}</h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">Body: {article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>

        <div className="Bottom">
          <section className="Voting">
          {error ? <p>{error}</p> : null}
          <p>votes: {currentVotes}</p>
          <button className="vote" onClick={upVote}>👍</button>
          </section>

          <Link to="comments">
            <button
            >
              💬 {article.comment_count}
            </button>
          </Link>
          <section>Created: {(article.created_at).slice(0,10)}</section>
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
          </div>

          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />

          <div className="BottomArticles">
            <section>Votes: {article.votes}</section>
            <section>Comments: {article.comment_count}</section>
            <section>Created: {(article.created_at).slice(0,10)}</section>
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
