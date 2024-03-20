import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

function UsersCard({ username, avatar }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <li id="User-Item">
      <h4 id="Username">{username}</h4>
      <img
        src={avatar}
        alt={`${username}'s avatar`}
        className="Profile-Picture"
      />
    </li>
  );
}

export default UsersCard;
