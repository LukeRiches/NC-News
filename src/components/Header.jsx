import { Link } from "react-router-dom";

function Header({ user }) {
  if (user === "Login") {
    return (
      <header>
        <Link to="/">
          <h1>NC News</h1>
        </Link>
        <Link to="/login">
          <button>
            {user}
          </button>
        </Link>
      </header>
    );
  } else {
    return (
      <header>
        <Link to="/">
          <h1>NC News</h1>
        </Link>
        {/* <Link to="/profile"> */}
        <p>
          {user}
        </p>
        {/* </Link> */}
      </header>
    );
  }
}

export default Header;
