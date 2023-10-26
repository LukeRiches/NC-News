import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useOutletContext } from "react-router-dom";

function Comment({ isLoading, setIsLoading, error, setError }) {
  const { articleID } = useParams();
  const [commentBody, setCommentbody] = useState("");
  const [commented, setCommented] = useOutletContext();

  function bodyOnChange(event) {
    const value = event.target.value;
    setCommentbody(value);
  }

  //User currently hardcoded will ammend once added login /sign up

  function postComment(event) {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}/comments`,
        { username: "grumpy19", body: commentBody }
      )
      .then((data) => {
        setIsLoading(false);
        setError(null);
        setCommentbody("");
        setCommented(commented + 1);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }

  //   console.log(commentBody);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <ErrorPage error={error}></ErrorPage>;
  }
  return (
    <div className="PostComment">
      <section>
        <form
          onSubmit={(event) => {
            postComment(event);
          }}
        >

          {/* <label htmlFor="Body">Body:</label> */}
          <input
            type="text"
            name="Body"
            id="Body"
            value={commentBody}
            onChange={bodyOnChange}
            required
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

export default Comment;
