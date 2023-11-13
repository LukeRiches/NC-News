import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faBookOpen, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Nav({ user }) {
  if (user === "Login") {
    return (
      <nav>
        <NavLink to="/topics">
          Topics {<FontAwesomeIcon icon={faList} />}
        </NavLink>
        <NavLink to="/articles">
          Articles {<FontAwesomeIcon icon={faBookOpen} />}
        </NavLink>
        <NavLink to="/users">
          Users {<FontAwesomeIcon icon={faUsers} />}
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav>
        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/articles">Articles </NavLink>
        <NavLink to="/users">Users </NavLink>
        {/* <NavLink to="/posts">Posts</NavLink>  */}
      </nav>
    );
  }
}

export default Nav;
