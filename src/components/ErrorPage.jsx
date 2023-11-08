import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function ErrorPage({ error }) {
  if (error !== undefined && error.data.msg === "Article does not exist") {
    return (
      <div>
        <ErrorMessage error={error} />
        <Link to="/articles">
          <button>View Articles</button>
        </Link>
      </div>
    );
  }
  if (error !== undefined && error.data.msg === "Topic does not exist") {
    return (
      <div>
        <ErrorMessage error={error} />
        <Link to="/topics">
          <button>View Topics</button>
        </Link>
      </div>
    );
  }
  if (error !== undefined && error.data.msg) {
    return (
      <div>
        <ErrorMessage error={error} />
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h3>404: Page Not Found</h3>
        <h3>Sorry, this page doesn't exist :(</h3>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  }
}

export default ErrorPage;
