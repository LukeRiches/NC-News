import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { SyncLoader } from "react-spinners";

function Login({ setUser, isLightMode, isDarkMode }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [validUsers, setValidUsers] = useState([]);
  const [isValidUser, setIsValidUser] = useState();

  function inputOnChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const check = validUsers.filter((user) => {
      return user.username === input;
    });
    if (check.length > 0) {
      setIsLoading(false);
      setIsValidUser(true);
      setUser(input);
      navigate("/");
    } else {
      setIsLoading(false);
      setIsValidUser(false);
      setInput("");
    }
  }

  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`https://northcoders-news-api-phe8.onrender.com/api/users`)
      .then(({ data }) => {
        if (data.msg) {
          setError(data.msg);
        } else {
          setError(null);
          setValidUsers(data.users);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [input]);

  if (isLoading && isLightMode) {
    return (
      <section className="Comment-Section">
        <h3>Loading Login Page...</h3>
        <SyncLoader
          color="#4b89ef"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </section>
    );
  }

  if (isLoading && isDarkMode) {
    return (
      <section className="Comment-Section">
        <h3>Loading Login Page...</h3>
        <SyncLoader
          color="#ef5f4b"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </section>
    );
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  if (isValidUser === false) {
    return (
      <main>
        <h2>Login</h2>
        <p id="SideNote">
          Note: There is no actual user authentication in my backend currently,
          temporarily it is dealt through my frontend, but an example username
          is 'cooljmessy'.
        </p>
        <p id="errorMessage">Please enter a valid Username</p>
        <form
          className="Login"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <span id="Input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={input}
              onChange={inputOnChange}
              required={true}
              className="inputBox"
            />
          </span>
          <span id="Input">
            <label htmlFor="password">Password</label>
            <input name="password" id="password" className="inputBox" />
          </span>
          <span id="Submit">
            <button type="submit" className="submit-button">
              Log In
            </button>
          </span>
        </form>
        <Link to="/sign_up">Sign Up</Link>
      </main>
    );
  } else {
    return (
      <main>
        <h2>Login</h2>
        <p id="SideNote">
          Note: There is no actual user authentication in my backend currently,
          temporarily it is dealt through my frontend, but an example username
          is 'cooljmessy'.
        </p>
        <form
          className="Login"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <span id="Input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={input}
              onChange={inputOnChange}
              required={true}
              className="inputBox"
            />
          </span>
          <span id="Input">
            <label htmlFor="password">Password</label>
            <input name="password" id="password" className="inputBox" />
          </span>
          <span id="Submit">
            <button type="submit" className="submit-button">
              Log In
            </button>
          </span>
        </form>
        <Link to="/sign_up">Sign Up</Link>
      </main>
    );
  }
}

export default Login;
