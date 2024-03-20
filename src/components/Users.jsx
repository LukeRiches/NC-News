import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import UsersList from "./UsersList";

function Users({ isLightMode, isDarkMode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://northcoders-news-api-phe8.onrender.com/api/users`)
      .then(({ data }) => {
        setIsLoading(false);
        setError(null);
        setUsersArray(data.users);
      })
      .catch((err) => {
        setError(err.response);
        setIsLoading(false);
      });
  }, []);

  // console.log(isLoading);
  // console.log(isLightMode);

  if (error) {
    return <ErrorPage error={error}></ErrorPage>;
  }
  if (isLoading && isLightMode) {
    return (
      <div>
        <h3>Loading Users...</h3>
        <SyncLoader
          className="Loader"
          color="#4b89ef"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  }
  if (isLoading && isDarkMode) {
    return (
      <div>
        <h3>Loading Users...</h3>
        <SyncLoader
          className="Loader"
          color="#ef5f4b"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  } else {
    return (
      <main className="Users">
        <h2>Users</h2>
        <UsersList
          usersArray={usersArray}
          isLoading={isLoading}
          error={error}
        />
      </main>
    );
  }
}

export default Users;
