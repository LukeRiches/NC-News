import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faBookOpen,
  faUsers,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Nav({ user }) {
  if (user === "Login") {
    return (
      <nav>
        <NavLink to="/" className="NavLink">
          <div className="Link-Text">
            Home {<FontAwesomeIcon icon={faHouse} />}
          </div>
        </NavLink>
        <NavLink to="/topics" className="NavLink">
          <div className="Link-Text">
            Topics {<FontAwesomeIcon icon={faList} />}
          </div>
        </NavLink>
        <NavLink to="/articles" className="NavLink">
          <div className="Link-Text">
            Articles {<FontAwesomeIcon icon={faBookOpen} />}
          </div>
        </NavLink>
        <NavLink to="/users" className="NavLink">
          <div className="Link-Text">
            Users {<FontAwesomeIcon icon={faUsers} />}
          </div>
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav>
        <NavLink to="/" className="NavLink">
          <div className="Link-Text">
            Home {<FontAwesomeIcon icon={faHouse} />}
          </div>
        </NavLink>
        <NavLink to="/topics" className="NavLink">
          <div className="Link-Text">
            Topics {<FontAwesomeIcon icon={faList} />}
          </div>
        </NavLink>
        <NavLink to="/articles" className="NavLink">
          <div className="Link-Text">
            Articles {<FontAwesomeIcon icon={faBookOpen} />}
          </div>
        </NavLink>
        <NavLink to="/users" className="NavLink">
          <div className="Link-Text">
            Users {<FontAwesomeIcon icon={faUsers} />}
          </div>
        </NavLink>
        {/* <NavLink to="/posts">Posts</NavLink>  */}
      </nav>
    );
  }
}

export default Nav;
