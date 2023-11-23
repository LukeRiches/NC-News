import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faList,
  faBookOpen,
  faUsers,
  faNewspaper,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function HeaderAndNav({ user, small, medium, large }) {
  if (user === "Login" && small) {
    return (
      <header>
        <Link to="/" className="logo">
          <h1>{<FontAwesomeIcon icon={faNewspaper} />}</h1>
        </Link>

        {/* <nav className="HeaderMiddle">
          <NavLink to="/">Home </NavLink>{" "}
          <NavLink to="/topics">
            Topics {<FontAwesomeIcon icon={faList} />}
          </NavLink>{" "}
          <NavLink to="/articles">
            Articles {<FontAwesomeIcon icon={faBookOpen} />}
          </NavLink>{" "}
          <NavLink to="/users">
            Users {<FontAwesomeIcon icon={faUsers} />}
          </NavLink>
        </nav> */}

        {/* <div className="HeaderRight">
          <NavLink to="/login" className="login">
            {user} {<FontAwesomeIcon icon={faUser} />}
          </NavLink>
        </div> */}

        <button className="bx bx-menu" id="menu-icon">
          {<FontAwesomeIcon icon={faBars} />}
        </button>
      </header>
    );
  }
  if (user === "Login" && medium) {
    return (
      <header>
        <Link to="/" className="logo">
          <h1>NC {<FontAwesomeIcon icon={faNewspaper} />}</h1>
        </Link>

        <nav className="HeaderMiddle">
          {/* <NavLink to="/">Home </NavLink>{" "} */}
          <NavLink to="/topics">
            <div className="linkBox">
              {<FontAwesomeIcon icon={faList} />}
              <p className="linkText">Topics</p>
            </div>
          </NavLink>{" "}
          <NavLink to="/articles">
            <div className="linkBox">
              {<FontAwesomeIcon icon={faBookOpen} />}
              <p className="linkText">Articles</p>
            </div>
          </NavLink>{" "}
          <NavLink to="/users">
            <div className="linkBox">
              {<FontAwesomeIcon icon={faUsers} />}
              <p className="linkText">Users</p>
            </div>
          </NavLink>
        </nav>

        {/* <div className="HeaderRight">
          <NavLink to="/login" className="login">
            {user} {<FontAwesomeIcon icon={faUser} />}
          </NavLink>
        </div> */}

        <button className="bx bx-menu" id="menu-icon">
          {<FontAwesomeIcon icon={faBars} />}
        </button>
      </header>
    );
  }
  if (user === "Login" && large) {
    return (
      <header>
        <Link to="/" className="logo">
          <h1>NC News {<FontAwesomeIcon icon={faNewspaper} />}</h1>
        </Link>

        <nav className="HeaderMiddle">
          {/* <NavLink to="/">Home </NavLink>{" "} */}
          <NavLink to="/topics">
            <div className="linkBox">
              {<FontAwesomeIcon icon={faList} />}
              <p className="linkText">Topics</p>
            </div>
          </NavLink>{" "}
          <NavLink to="/articles">
            <div className="linkBox">
              {<FontAwesomeIcon icon={faBookOpen} />}
              <p className="linkText">Articles</p>
            </div>
          </NavLink>{" "}
          <NavLink to="/users">
            <div className="linkBox">
              {<FontAwesomeIcon icon={faUsers} />}
              <p className="linkText">Users</p>
            </div>
          </NavLink>
        </nav>

        {/* <div className="HeaderRight">
          <NavLink to="/login" className="login">
            {user} {<FontAwesomeIcon icon={faUser} />}
          </NavLink>
        </div> */}

        <button className="bx bx-menu" id="menu-icon">
          {<FontAwesomeIcon icon={faBars} />}
        </button>
      </header>
    );
  }
  if (user === "Login" && !small && !medium && !large) {
    return (
      <header>
        <Link to="/" className="logo">
          <h1>NC {<FontAwesomeIcon icon={faNewspaper} />}</h1>
        </Link>

        <nav className="HeaderMiddle">
          {/* <NavLink to="/">Home </NavLink>{" "} */}
          <NavLink to="/topics">
            Topics {<FontAwesomeIcon icon={faList} />}
          </NavLink>{" "}
          <NavLink to="/articles">
            Articles {<FontAwesomeIcon icon={faBookOpen} />}
          </NavLink>{" "}
          <NavLink to="/users">
            Users {<FontAwesomeIcon icon={faUsers} />}
          </NavLink>
        </nav>

        <div className="HeaderRight">
          <NavLink to="/login" className="login">
            {user} {<FontAwesomeIcon icon={faUser} />}
          </NavLink>
        </div>

        <button className="bx bx-menu" id="menu-icon">
          {<FontAwesomeIcon icon={faBars} />}
        </button>
      </header>
    );
  }
  if (user !== "Login" && !onMobile && !onTablet) {
    return (
      <header>
        <title className="HeaderLeft">
          <h1>NC News</h1>
        </title>

        <nav className="HeaderMiddle">
          <NavLink to="/">Home </NavLink>{" "}
          <NavLink to="/topics">
            Topics {<FontAwesomeIcon icon={faList} />}
          </NavLink>{" "}
          <NavLink to="/articles">
            Articles {<FontAwesomeIcon icon={faBookOpen} />}
          </NavLink>{" "}
          <NavLink to="/users">
            Users {<FontAwesomeIcon icon={faUsers} />}
          </NavLink>{" "}
          {/* <NavLink to="/posts">
            <button>Posts</button>
          </NavLink> */}
        </nav>

        <div className="HeaderRight">
          {/* <NavLink to="/profile""> */}
          <p>{user}</p>
          {/* </NavLink> */}
        </div>
      </header>
    );
  }
}

export default HeaderAndNav;
