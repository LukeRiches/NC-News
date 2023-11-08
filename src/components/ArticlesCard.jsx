import { Link, useNavigate } from "react-router-dom";
import Comments from "./Comments";
import axios from "axios";
import { useState } from "react";

function ArticlesCard({
  article,
  user,
  currentVotes,
  setCurrentVotes,
  currentVotesBeforeChanges,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentSectionIsOpened, setCommentSectionIsOpened] = useState(false);
  const navigate = useNavigate();

  function upVote() {
    setCurrentVotes((currentCount) => currentCount + 1);
    setError(null);
    axios
      .patch(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${article.article_id}`,
        { inc_votes: 1 }
      )
      .then(({ data }) => {})
      .catch((error) => {
        setCurrentVotes((currentCount) => currentCount - 1);
        setError("Something went wrong, please try again.");
      });
  }

  function downVote() {
    setCurrentVotes((currentCount) => currentCount - 1);
    setError(null);
    axios
      .patch(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${article.article_id}`,
        { inc_votes: -1 }
      )
      .then(({ data }) => {})
      .catch((error) => {
        setCurrentVotes((currentCount) => currentCount + 1);
        setError("Something went wrong, please try again.");
      });
  }

  function openComments() {
    setCommentSectionIsOpened(true);
    navigate("comments");
  }

  function closeComments() {
    setCommentSectionIsOpened(false);
    navigate(`/article/${article.article_id}`);
  }

  if (
    user === "Login" &&
    article.body &&
    currentVotes === currentVotesBeforeChanges &&
    commentSectionIsOpened === false
  ) {
    return (
      <main>
        <div className="Top">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>

        <div className="Bottom">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
          </section>

          <button onClick={openComments}>💬{article.comment_count}</button>

          <section> {article.created_at.slice(0, 10)}</section>
        </div>
      </main>
    );
  }
  if (
    user === "Login" &&
    article.body &&
    currentVotes === currentVotesBeforeChanges &&
    commentSectionIsOpened === true
  ) {
    return (
      <main>
        <div className="Top">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>

        <div className="Bottom">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
          </section>

          <button onClick={closeComments}>💬{article.comment_count}</button>

          <section>{article.created_at.slice(0, 10)}</section>
        </div>
      </main>
    );
  }
  if (
    article.body &&
    currentVotes === currentVotesBeforeChanges &&
    commentSectionIsOpened === false
  ) {
    return (
      <main>
        <div className="Top">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>
        {error ? <p>{error}</p> : null}
        <div className="Bottom">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
            <button className="vote" onClick={upVote}>
              👍
            </button>
            <button className="vote" onClick={downVote}>
              👎
            </button>
          </section>

          <button onClick={openComments}>💬{article.comment_count}</button>

          <section> {article.created_at.slice(0, 10)}</section>
        </div>
      </main>
    );
  }
  if (
    article.body &&
    currentVotes === currentVotesBeforeChanges &&
    commentSectionIsOpened === true
  ) {
    return (
      <main>
        <div className="Top">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>
        {error ? <p>{error}</p> : null}

        <div className="Bottom">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
            <button className="vote" onClick={upVote}>
              👍
            </button>
            <button className="vote" onClick={downVote}>
              👎
            </button>
          </section>

          <button onClick={closeComments}>💬{article.comment_count}</button>

          <section> {article.created_at.slice(0, 10)}</section>
        </div>
      </main>
    );
  }
  if (
    currentVotes !== currentVotesBeforeChanges &&
    currentVotes === currentVotesBeforeChanges + 1 &&
    commentSectionIsOpened === false
  ) {
    return (
      <main>
        <div className="Top">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>
        {error ? <p>{error}</p> : null}
        <div className="Bottom">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
            <button className="vote" onClick={downVote}>
              👎
            </button>
          </section>

          <button onClick={openComments}>💬{article.comment_count}</button>

          <section> {article.created_at.slice(0, 10)}</section>
        </div>
      </main>
    );
  }
  if (
    currentVotes !== currentVotesBeforeChanges &&
    currentVotes === currentVotesBeforeChanges + 1 &&
    commentSectionIsOpened === true
  ) {
    return (
      <main>
        <div className="Top">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>
        {error ? <p>{error}</p> : null}
        <div className="Bottom">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
            <button className="vote" onClick={downVote}>
              👎
            </button>
          </section>

          <button onClick={closeComments}>💬{article.comment_count}</button>

          <section> {article.created_at.slice(0, 10)}</section>
        </div>
      </main>
    );
  }
  if (
    currentVotes !== currentVotesBeforeChanges &&
    currentVotes === currentVotesBeforeChanges - 1 &&
    commentSectionIsOpened === false
  ) {
    return (
      <main>
        <div className="Top">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>
        {error ? <p>{error}</p> : null}
        <div className="Bottom">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
            <button className="vote" onClick={upVote}>
              👍
            </button>
          </section>

          <button onClick={openComments}>💬{article.comment_count}</button>

          <section> {article.created_at.slice(0, 10)}</section>
        </div>
      </main>
    );
  }
  if (
    currentVotes !== currentVotesBeforeChanges &&
    currentVotes === currentVotesBeforeChanges - 1 &&
    commentSectionIsOpened === true
  ) {
    return (
      <main>
        <div className="Top">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </div>
        <div>
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </div>
        {error ? <p>{error}</p> : null}
        <div className="Bottom">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
            <button className="vote" onClick={upVote}>
              👍
            </button>
          </section>

          <button onClick={closeComments}>💬{article.comment_count}</button>

          <section> {article.created_at.slice(0, 10)}</section>
        </div>
      </main>
    );
  } else {
    return (
      <li>
        <Link to={`/article/${article.article_id}`}>
          <button>
            <div className="Top">
              <h3>
                {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
              </h3>
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
              <section> {article.created_at.slice(0, 10)}</section>
            </div>
          </button>
        </Link>
      </li>
    );
  }
}

export default ArticlesCard;
