import axios from "axios";
import { useState } from "react";
import ErrorPage from "./ErrorPage";
import { useOutletContext } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function CommentsCard({
  comment,
  user,
  deleteIsLoading,
  setDeleteIsLoading,
  setCommentsArray,
  isLightMode,
  isDarkMode,
}) {
  const [error, setError] = useState(null);
  const [commented, setCommented, deletedComment, setDeletedComment] =
    useOutletContext();
  const [commentToBeDeleted, setCommentToBeDeleted] = useState(null);

  function deleteComment(event) {
    setDeleteIsLoading(true);
    setCommentToBeDeleted(comment.comment_id);
    axios
      .delete(
        `https://northcoders-news-api-phe8.onrender.com/api/comments/${comment.comment_id}`
      )
      .then((data) => {
        setDeletedComment(deletedComment + 1);
        setError(null);
      })
      .catch((err) => {
        setDeleteIsLoading(false);
        setError(err.message);
      });
  }

  if (error) {
    return <ErrorPage error={error} />;
  }
  if (
    deleteIsLoading &&
    isLightMode &&
    comment.comment_id === commentToBeDeleted
  ) {
    return (
      <section>
        <h3>Deleting Comment...</h3>
        <SyncLoader
          color="#4b89ef"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </section>
    );
  }
  if (
    deleteIsLoading &&
    isDarkMode &&
    comment.comment_id === commentToBeDeleted
  ) {
    return (
      <section>
        <h3>Deleting Comment...</h3>
        <SyncLoader
          color="#ef5f4b"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </section>
    );
  }
  if (user === comment.author) {
    return (
      <li id="Comment-Item">
        <section className="CommentInfo">
          <h3>{comment.author}</h3>
          <p className="CommentDate">{comment.created_at.slice(0, 10)}</p>
        </section>
        <p className="Comment-Text">{comment.body}</p>
        <section className="CommentInfoBottomSignedIn">
          <p className="Comment-Votes">Votes: {comment.votes}</p>
          <button onClick={deleteComment} className="DeleteComment">
            {<FontAwesomeIcon icon={faTrashCan} />}
          </button>
        </section>
      </li>
    );
  } else {
    return (
      <li id="Comment-Item">
        <section className="CommentInfo">
          <h3>{comment.author}</h3>
          <p className="CommentDate">{comment.created_at.slice(0, 10)}</p>
        </section>
        <p className="Comment-Text">{comment.body}</p>
        <section className="CommentInfoBottom">
          <p className="Comment-Votes">Votes: {comment.votes}</p>
        </section>
      </li>
    );
  }
}

export default CommentsCard;
