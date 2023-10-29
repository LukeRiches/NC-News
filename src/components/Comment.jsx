import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useOutletContext } from "react-router-dom";

function Comment({  user }) {
  // const [postIsLoading, setPostIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { articleID } = useParams();
  const [commentBody, setCommentbody] = useState("");
  const [commented, setCommented, postIsLoading, setPostIsLoading] = useOutletContext();
  


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

  if (postIsLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <ErrorPage error={error}></ErrorPage>;
  }
  if (user === "Login") {
    return (
      <section>
        <p>
          You can't comment until you <Link to="../../../login">sign in</Link>
        </p>
        <Link to="..">
          <button>Cancel</button>
        </Link>
      </section>
    );
  }
  if (user !== "Login") {
    return (
      <div className="PostComment">
        <section>
          <form
            onSubmit={(event) => {
              postComment(event);
            }}
          >
            <input
              type="text"
              name="Body"
              id="Body"
              value={commentBody}
              onChange={bodyOnChange}
              required={true}
            />
            <button>Submit</button>
          </form>
        </section>

        <Link to="..">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Comment;
