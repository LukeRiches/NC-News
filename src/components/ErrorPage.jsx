import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function ErrorPage({ error }) {
  if (error !== undefined && error.data.msg === "Article does not exist") {
    return (
      <section id="Error-Message">
        <ErrorMessage error={error} />
        <Link to="/articles">View Articles </Link>
      </section>
    );
  }
  if (error !== undefined && error.data.msg === "Topic does not exist") {
    return (
      <section id="Error-Message">
        <ErrorMessage error={error} />
        <Link to="/topics">View Topics</Link>
      </section>
    );
  }
  if (error !== undefined && error.data.msg) {
    return (
      <section id="Error-Message">
        <ErrorMessage error={error} />
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </section>
    );
  } else {
    return (
      <section id="Error-Message">
        <h3>404: Page Not Found</h3>
        <h3>Sorry, this page doesn't exist :(</h3>
        <Link to="/">Back to Home</Link>
      </section>
    );
  }
}

export default ErrorPage;
