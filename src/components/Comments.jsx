import { useEffect, useState } from "react";
import axios from "axios";
import CommentsCard from "./CommentsCard";
import ErrorPage from "./ErrorPage";
import {
  Link,
  Outlet,
  useOutletContext,
  useParams,
  useNavigate,
} from "react-router-dom";
import { SyncLoader } from "react-spinners";

function Comments({
  user,
  isLightMode,
  isDarkMode,
  createCommentIsOpened,
  setCreateCommentIsOpened,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [postIsLoading, setPostIsLoading] = useState(false);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { articleID } = useParams();
  const [commentsArray, setCommentsArray] = useState();
  const [commented, setCommented, deletedComment, setDeletedComment] =
    useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}/comments`
      )
      .then(({ data }) => {
        setIsLoading(false);
        if (data.msg) {
          // setError(data.msg);
          setCommentsArray([]);
        } else {
          setError(null);
          setCommentsArray(data);
          setPostIsLoading(false);
          setDeleteIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [articleID, commented, deletedComment]);

  function openComment() {
    setCreateCommentIsOpened(true);
    navigate("comment");
  }

  if (error) {
    return (
      <section>
        <ErrorPage error={error}></ErrorPage>
      </section>
    );
  }

  if (isLoading && isLightMode) {
    return (
      <section className="Comment-Section">
        <h3>Loading Comments...</h3>
        <SyncLoader
          color="#4b89ef"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </section>
    );
  }

  if (isLoading && isDarkMode) {
    return (
      <section className="Comment-Section">
        <h3>Loading Comments...</h3>
        <SyncLoader
          color="#ef5f4b"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </section>
    );
  }

  if (commentsArray) {
    return (
      <section className="Comment-Section">
        <div className={!createCommentIsOpened ? "Comment" : "hide"}>
          <button onClick={openComment} className="Comment-Button">
            Comment
          </button>
        </div>

        <Outlet
          context={[commented, setCommented, postIsLoading, setPostIsLoading]}
        />
        <ol id="Comments-List">
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
                isDarkMode={isDarkMode}
                isLightMode={isLightMode}
              ></CommentsCard>
            );
          })}
        </ol>
      </section>
    );
  }
}

export default Comments;
