import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faNewspaper } from "@fortawesome/free-solid-svg-icons";

function Header({ user }) {
  if (user === "Login") {
    return (
      <header>
        {/* <NavLink to="/"> */}
        <h1 className="Title-Not-Signed-In">
          NC News {<FontAwesomeIcon icon={faNewspaper} />}
        </h1>
        {/* </NavLink> */}
        <NavLink to="/login" className="login">
          {user} {<FontAwesomeIcon icon={faUser} />}
        </NavLink>
      </header>
    );
  } else {
    return (
      <header>
        {/* <NavLink to="/"> */}
        <h1 className="Title">
          NC News {<FontAwesomeIcon icon={faNewspaper} />}
        </h1>
        {/* </NavLink> */}
        {/* <NavLink to="/profile"> */}
        <p className="login">{user}</p>
        {/* </NavLink> */}
      </header>
    );
  }
}

export default Header;
