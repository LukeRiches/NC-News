import axios from "axios";
import { useState } from "react";
import ErrorPage from "./ErrorPage";
import { useOutletContext } from "react-router-dom";
import { SyncLoader } from "react-spinners";

function CommentsCard({ comment, user, deleteIsLoading, setDeleteIsLoading, setCommentsArray }) {
  const [error, setError] = useState(null);
  const [commented, setCommented, deletedComment, setDeletedComment] = useOutletContext();
  const [commentToBeDeleted, setCommentToBeDeleted] = useState(null) 

  function deleteComment(event) {
    setDeleteIsLoading(true);
    setCommentToBeDeleted(comment.comment_id)
    axios
      .delete(
        `https://northcoders-news-api-phe8.onrender.com/api/comments/${comment.comment_id}`,
      )
      .then((data) => {
        setDeletedComment(deletedComment + 1);

        setError(null);
      })
      .catch((err) => {
        setDeleteIsLoading(false);
        setError(err.message);
      })
  }

  if (error) {
    return <ErrorPage error={error}/>
  }
  if(deleteIsLoading && comment.comment_id === commentToBeDeleted){
    return (
      <div>
        <p>Deleting Comment</p>
        <SyncLoader color="#36d7b7" margin={3} size={15} speedMultiplier={0.5}/>
      </div>
    )
  }
  if (user === comment.author) {
    return (
      <li>
        <div className="Top">
          <h3>{comment.author}</h3>
        </div>
        <p>{comment.body}</p>
        <div className="Bottom">
          <p>Votes: {comment.votes}</p>
          <p>{comment.created_at.slice(0, 10)}</p>
          <button onClick={deleteComment}>🗑️</button>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <div className="Top">
          <h3>{comment.author}</h3>
        </div>
        <p>{comment.body}</p>
        <div className="Bottom">
          <p>Votes: {comment.votes}</p>
          <p>{comment.created_at.slice(0, 10)}</p>
        </div>
      </li>
    );
  }
}

export default CommentsCard;
