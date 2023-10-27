import axios from "axios";
import { useState } from "react";
import ErrorPage from "./ErrorPage";
import { useOutletContext } from "react-router-dom";

function CommentsCard({ comment, user, }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletedComment, setDeletedComment] = useOutletContext();


  function deleteComment(event) {
    event.preventDefault();
    setIsLoading(true);
    axios
      .delete(
        `https://northcoders-news-api-phe8.onrender.com/api/comments/${comment.comment_id}`,
      )
      .then((data) => {
        setDeletedComment(deletedComment + 1);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }
  if (error) {
    return <ErrorPage error={error}/>
  }
  if(isLoading){
    return <p>Loading...</p>
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
