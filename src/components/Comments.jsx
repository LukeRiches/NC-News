import { useEffect, useState } from "react";
import axios from "axios";
import CommentsCard from "./CommentsCard";
import ErrorPage from "./ErrorPage";
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";

function Comments({ user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [postIsLoading, setPostIsLoading] = useState(false);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { articleID } = useParams();
  const [commentsArray, setCommentsArray] = useState([]);
  const [commented, setCommented, deletedComment, setDeletedComment] =
    useOutletContext();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}/comments`
      )
      .then(({ data }) => {
        setIsLoading(false);
        if (data.msg) {
          setError(data.msg);
        } else {
          setError(null);
          setCommentsArray(data);
          setPostIsLoading(false);
          setDeleteIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [articleID, commented, deletedComment]);

  if (error) {
    return (
      <section>
        <h4>Comments:</h4>
        <ErrorPage error={error}></ErrorPage>
      </section>
    );
  }
  if (commentsArray.length) {
    return (
      <section>
        <h4>Comments:</h4>
        <Link to="comment">comment</Link>
        <Outlet
          context={[commented, setCommented, postIsLoading, setPostIsLoading]}
        />
        <ol>
          {commentsArray.map((comment) => {
            return (
              <CommentsCard
                comment={comment}
                user={user}
                deletedComment={deletedComment}
                setDeletedComment={setDeletedComment}
                deleteIsLoading={deleteIsLoading}
                setDeleteIsLoading={setDeleteIsLoading}
                setCommentsArray={setCommentsArray}
                key={`comment-${comment.comment_id}`}
              ></CommentsCard>
            );
          })}
        </ol>
      </section>
    );
  }
}

export default Comments;
