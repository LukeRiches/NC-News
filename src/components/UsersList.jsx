import UsersCard from "./UsersCard";
import ErrorPage from "./ErrorPage";

function UsersList({ usersArray, isLoading, error }) {
  if (isLoading) {
    return;
  }
  // if (error) {
  //   return <ErrorPage error={error}></ErrorPage>;
  // }
  else {
    return (
      <ol id="Users-List">
        {usersArray.map((user) => {
          return (
            <UsersCard
              username={user.username}
              avatar={user.avatar_url}
              key={`${user.username}`}
            ></UsersCard>
          );
        })}
      </ol>
    );
  }
}

export default UsersList;
