import { Link } from "react-router-dom";

function HeaderAndNav({ user }) {
  if (user === "Login") {
    return (
      <header>
        <h1 className="logo">NC News</h1>

        <nav className="HeaderMiddle">
          <Link to="/">
            <button className="links">Home</button>
          </Link>{" "}
          <Link to="/topics">
            <button className="links">Topics</button>
          </Link>{" "}
          <Link to="/articles">
            <button className="links">Articles</button>
          </Link>{" "}
          <Link to="/users">
            <button className="links">Users</button>
          </Link>
        </nav>

        <div className="HeaderRight">
          <Link to="/login">
            <button className="login">{user}</button>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <title className="HeaderLeft">
          <h1>NC News</h1>
        </title>

        <nav className="HeaderMiddle">
          <Link to="/topics" className="links">
            <button>Topics</button>
          </Link>{" "}
          <Link to="/articles" className="links">
            <button>Articles</button>
          </Link>{" "}
          <Link to="/users" className="links">
            <button>Users</button>
          </Link>{" "}
          {/* <Link to="/posts" className="links">
            <button>Posts</button>
          </Link> */}
        </nav>

        <div className="HeaderRight">
          {/* <Link to="/profile""> */}
          <p>{user}</p>
          {/* </Link> */}
        </div>
      </header>
    );
  }
}

export default HeaderAndNav;
