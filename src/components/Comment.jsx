import { useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  useParams,
  useOutletContext,
  useNavigate,
} from "react-router-dom";
import { SyncLoader } from "react-spinners";
import ErrorPage from "./ErrorPage";

function Comment({ user, setCreateCommentIsOpened, isLightMode, isDarkMode }) {
  // const [postIsLoading, setPostIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { articleID } = useParams();
  const [commentBody, setCommentbody] = useState("");
  const [commented, setCommented, postIsLoading, setPostIsLoading] =
    useOutletContext();
  const navigate = useNavigate();

  function bodyOnChange(event) {
    const value = event.target.value;
    setCommentbody(value);
  }

  //User currently hardcoded will ammend once added login /sign up

  function postComment(event) {
    event.preventDefault();
    setPostIsLoading(true);
    axios
      .post(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}/comments`,
        { username: user, body: commentBody }
      )
      .then((data) => {
        setError(null);
        setCommentbody("");
        setCommented(commented + 1);
      })
      .catch((err) => {
        setPostIsLoading(false);
        setError(err);
      });
  }

  function closeComment() {
    setCreateCommentIsOpened(false);
    navigate(`..`);
  }

  if (postIsLoading && isLightMode) {
    return (
      <div>
        <h3>Posting Comment...</h3>
        <SyncLoader
          color="#4b89ef"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  }

  if (postIsLoading && isDarkMode) {
    return (
      <div>
        <h3>Posting Comment...</h3>
        <SyncLoader
          color="#ef5f4b"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  }

  if (postIsLoading) {
    return (
      <div>
        <p>Posting Comment</p>
        <SyncLoader
          color="#36d7b7"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  }
  if (error) {
    return <ErrorPage error={error}></ErrorPage>;
  }
  if (user === "Login") {
    return (
      <section className="Create-Comment">
        <div className="Create-Comment-Message signInMessage">
          <p>You can't comment until you </p>
          <Link to="../../../login" className="Close-Create-Comment">
            sign in
          </Link>
        </div>

        <button className="Close-Create-Comment" onClick={closeComment}>
          Cancel
        </button>
      </section>
    );
  }
  if (user !== "Login") {
    return (
      <div className="Create-Comment">
        <section>
          <form
            onSubmit={(event) => {
              postComment(event);
            }}
            className="Create-Comment-Message"
          >
            <div className="Create-Comment-Section">
              <input
                type="text"
                name="Body"
                id="Body"
                value={commentBody}
                onChange={bodyOnChange}
                required={true}
                className="Comment-Input-Box"
                placeholder="Share your thoughts... "
              />
              {/* <label for="Body" className="form__label">
              Share your thoughts...
            </label> */}
              <button className="Close-Create-Comment">Submit</button>
            </div>

            <button
              id="cancel"
              className="Close-Create-Comment"
              onClick={closeComment}
            >
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default Comment;
