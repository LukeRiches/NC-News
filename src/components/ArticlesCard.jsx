import { Link, useNavigate } from "react-router-dom";
import Comments from "./Comments";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

function ArticlesCard({
  article,
  user,
  currentVotes,
  setCurrentVotes,
  currentVotesBeforeChanges,
  setCreateCommentIsOpened,
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
    setCreateCommentIsOpened(false);
    navigate("comments");
  }

  function closeComments() {
    setCommentSectionIsOpened(false);
    setCreateCommentIsOpened(false);
    navigate(`/article/${article.article_id}`);
  }

  // console.log(article.created_at.slice(0, 10).split("-").reverse().join("/");
  // 2020-03-22T14:25:00.000Z
  // <section className="Date">{article.created_at.toLocaleDateString()}</section>;

  if (
    user === "Login" &&
    article.body &&
    currentVotes === currentVotesBeforeChanges &&
    commentSectionIsOpened === false
  ) {
    return (
      <article>
        <section className="Article-Info">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </section>
        <section className="Article-Body">
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </section>

        <section className="Article-Interactions">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
          </section>

          <button
            onClick={openComments}
            className="Open-Comments-Not-Logged-In"
          >
            <FontAwesomeIcon icon={faComments} size="lg" />{" "}
            {article.comment_count}
          </button>

          <section className="Date">
            {" "}
            {article.created_at.slice(0, 10).split("-").reverse().join("/")}
          </section>
        </section>
      </article>
    );
  }
  if (
    user === "Login" &&
    article.body &&
    currentVotes === currentVotesBeforeChanges &&
    commentSectionIsOpened === true
  ) {
    return (
      <article>
        <section className="Article-Info">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </section>
        <section className="Article-Body">
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </section>

        <section className="Article-Interactions">
          <section className="Voting">
            <p>votes: {currentVotes}</p>
          </section>

          <button
            onClick={closeComments}
            className="Open-Comments-Not-Logged-In active"
          >
            <FontAwesomeIcon icon={faComments} size="lg" />{" "}
            {article.comment_count}
          </button>

          <section className="Date">
            {article.created_at.slice(0, 10).split("-").reverse().join("/")}
          </section>
        </section>
      </article>
    );
  }
  if (
    article.body &&
    currentVotes === currentVotesBeforeChanges &&
    commentSectionIsOpened === false
  ) {
    return (
      <article>
        <section className="Article-Info">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </section>
        <section className="Article-Body">
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </section>
        {error ? <p>{error}</p> : null}
        <section className="Article-Interactions">
          <section className="Voting">
            <p className="Vote-Count">votes: {currentVotes}</p>
            <button className="vote" onClick={upVote}>
              {<FontAwesomeIcon icon={faThumbsUp} size="lg" />}
            </button>
            <button className="vote" onClick={downVote}>
              {<FontAwesomeIcon icon={faThumbsDown} size="lg" />}
            </button>
          </section>

          <button onClick={openComments} className="Open-Comments-Logged-In">
            <FontAwesomeIcon icon={faComments} size="lg" />{" "}
            {article.comment_count}
          </button>

          <section className="Date">
            {" "}
            {article.created_at.slice(0, 10).split("-").reverse().join("/")}
          </section>
        </section>
      </article>
    );
  }
  if (
    article.body &&
    currentVotes === currentVotesBeforeChanges &&
    commentSectionIsOpened === true
  ) {
    return (
      <article>
        <section className="Article-Info">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </section>
        <section className="Article-Body">
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </section>
        {error ? <p>{error}</p> : null}

        <section className="Article-Interactions">
          <section className="Voting">
            <p className="Vote-Count">votes: {currentVotes}</p>
            <button className="vote" onClick={upVote}>
              {<FontAwesomeIcon icon={faThumbsUp} size="lg" />}
            </button>
            <button className="vote" onClick={downVote}>
              {<FontAwesomeIcon icon={faThumbsDown} size="lg" />}
            </button>
          </section>

          <button
            onClick={closeComments}
            className="Open-Comments-Logged-In active"
          >
            <FontAwesomeIcon icon={faComments} size="lg" />{" "}
            {article.comment_count}
          </button>

          <section className="Date">
            {" "}
            {article.created_at.slice(0, 10).split("-").reverse().join("/")}
          </section>
        </section>
      </article>
    );
  }
  if (
    currentVotes !== currentVotesBeforeChanges &&
    currentVotes === currentVotesBeforeChanges + 1 &&
    commentSectionIsOpened === false
  ) {
    return (
      <article>
        <section className="Article-Info">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </section>
        <section className="Article-Body">
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </section>
        {error ? <p>{error}</p> : null}
        <section className="Article-Interactions">
          <section className="Voting">
            <p className="Vote-Count">votes: {currentVotes}</p>
            {/* <button className="vote"> */}
            {
              <FontAwesomeIcon
                icon={faThumbsUp}
                size="lg"
                className="activeVote upVote"
              />
            }
            {/* </button> */}

            <button className="vote" onClick={downVote}>
              {<FontAwesomeIcon icon={faThumbsDown} size="lg" />}
            </button>
          </section>

          <button onClick={openComments} className="Open-Comments-Logged-In">
            <FontAwesomeIcon icon={faComments} size="lg" />{" "}
            {article.comment_count}
          </button>

          <section className="Date">
            {" "}
            {article.created_at.slice(0, 10).split("-").reverse().join("/")}
          </section>
        </section>
      </article>
    );
  }
  if (
    currentVotes !== currentVotesBeforeChanges &&
    currentVotes === currentVotesBeforeChanges + 1 &&
    commentSectionIsOpened === true
  ) {
    return (
      <article>
        <section className="Article-Info">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </section>
        <section className="Article-Body">
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </section>
        {error ? <p>{error}</p> : null}
        <section className="Article-Interactions">
          <section className="Voting">
            <p className="Vote-Count">votes: {currentVotes}</p>
            {/* <button className="vote"> */}
            {
              <FontAwesomeIcon
                icon={faThumbsUp}
                size="lg"
                className="activeVote upVote"
              />
            }
            {/* </button> */}

            <button className="vote" onClick={downVote}>
              {<FontAwesomeIcon icon={faThumbsDown} size="lg" />}
            </button>
          </section>

          <button
            onClick={closeComments}
            className="Open-Comments-Logged-In active"
          >
            <FontAwesomeIcon icon={faComments} size="lg" />{" "}
            {article.comment_count}
          </button>

          <section className="Date">
            {" "}
            {article.created_at.slice(0, 10).split("-").reverse().join("/")}
          </section>
        </section>
      </article>
    );
  }
  if (
    currentVotes !== currentVotesBeforeChanges &&
    currentVotes === currentVotesBeforeChanges - 1 &&
    commentSectionIsOpened === false
  ) {
    return (
      <article>
        <section className="Article-Info">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </section>
        <section className="Article-Body">
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </section>
        {error ? <p>{error}</p> : null}
        <section className="Article-Interactions">
          <section className="Voting">
            <p className="Vote-Count">votes: {currentVotes}</p>
            <button className="vote" onClick={upVote}>
              {<FontAwesomeIcon icon={faThumbsUp} size="lg" />}
            </button>
            {/* <button className="vote"> */}
            {
              <FontAwesomeIcon
                icon={faThumbsDown}
                size="lg"
                className="activeVote  downVote"
              />
            }
            {/* </button> */}
          </section>

          <button onClick={openComments} className="Open-Comments-Logged-In">
            <FontAwesomeIcon icon={faComments} size="lg" />{" "}
            {article.comment_count}
          </button>

          <section className="Date">
            {" "}
            {article.created_at.slice(0, 10).split("-").reverse().join("/")}
          </section>
        </section>
      </article>
    );
  }
  if (
    currentVotes !== currentVotesBeforeChanges &&
    currentVotes === currentVotesBeforeChanges - 1 &&
    commentSectionIsOpened === true
  ) {
    return (
      <article>
        <section className="Article-Info">
          <h3>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h3>
          <h4>{article.title}</h4>
          <p>Author: {article.author}</p>
        </section>
        <section className="Article-Body">
          <p className="Body">{article.body}</p>
          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />
        </section>
        {error ? <p>{error}</p> : null}
        <section className="Article-Interactions">
          <section className="Voting">
            <p className="Vote-Count">votes: {currentVotes}</p>
            <button className="vote" onClick={upVote}>
              {<FontAwesomeIcon icon={faThumbsUp} size="lg" />}
            </button>
            {/* <button className="vote"> */}
            {
              <FontAwesomeIcon
                icon={faThumbsDown}
                size="lg"
                className="activeVote downVote"
              />
            }
            {/* </button> */}
          </section>

          <button
            onClick={closeComments}
            className="Open-Comments-Logged-In active"
          >
            <FontAwesomeIcon icon={faComments} size="lg" />{" "}
            {article.comment_count}
          </button>

          <section className="Date">
            {" "}
            {article.created_at.slice(0, 10).split("-").reverse().join("/")}
          </section>
        </section>
      </article>
    );
  } else {
    return (
      <li id="Article-Item">
        <Link to={`/article/${article.article_id}`} className="Article-Card">
          <section className="Article-Info">
            <h3>
              {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
            </h3>
            <h4>{article.title}</h4>
            <p>Author: {article.author}</p>
          </section>

          <img
            src={article.article_img_url}
            alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
          />

          <section className="Articles-Interactions">
            <section>Votes: {article.votes}</section>
            <section>Comments: {article.comment_count}</section>
            <section>
              {" "}
              {article.created_at.slice(0, 10).split("-").reverse().join("/")}
            </section>
          </section>
        </Link>
      </li>
    );
  }
}

export default ArticlesCard;
