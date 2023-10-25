import { useEffect, useState } from "react";
import axios from "axios";
import CommentsCard from "./CommentsCard";

function Comments({ articleID, isLoading, setIsLoading, error, setError }) {
  const [commentsArray, setCommentsArray] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}/comments`
      )
      .then(({ data }) => {
        setIsLoading(false);
        setError(null);
        setCommentsArray(data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [articleID]);


  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <p>
        Error: {error.status} message: {error.msg}
      </p>
    );
  } else {
    return (
      <ol>
        {commentsArray.map((comment) => {

          return (
            <CommentsCard comment={comment} key={`comment-${comment.comment_id}`}></CommentsCard>
          )
        })}
      </ol>
    );
  }
}

export default Comments;
