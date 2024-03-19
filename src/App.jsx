import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Article from "./components/Article";
import Comments from "./components/Comments";
import ErrorPage from "./components/ErrorPage";
import Comment from "./components/Comment";
import Login from "./components/Login";
import Users from "./components/Users";
import { useMediaQuery } from "react-responsive";
import SignUp from "./components/SignUp";

function App() {
  const [user, setUser] = useState("Login");
  const [createCommentIsOpened, setCreateCommentIsOpened] = useState(false);

  const isDarkMode = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const isLightMode = useMediaQuery({
    query: "(prefers-color-scheme: light)",
  });

  const small = useMediaQuery({
    query: "only screen and (max-width: 450px)",
  });

  const medium = useMediaQuery({
    query: "only screen and (max-width: 750px)",
  });

  const large = useMediaQuery({
    query: "only screen and (max-width: 1010px)",
  });

  return (
    <div className="App">
      <Header user={user} />
      <Nav user={user} />
      <Routes>
        <Route path="*" element={<ErrorPage />} />

        <Route
          path="/"
          element={<Home isDarkMode={isDarkMode} isLightMode={isLightMode} />}
        ></Route>

        <Route
          path="/login"
          element={
            <Login
              setUser={setUser}
              isDarkMode={isDarkMode}
              isLightMode={isLightMode}
            />
          }
        ></Route>

        <Route path="/sign_up" element={<SignUp />}></Route>

        <Route
          path="/topics"
          element={<Topics isDarkMode={isDarkMode} isLightMode={isLightMode} />}
        ></Route>

        <Route
          path="/articles"
          element={
            <Articles isDarkMode={isDarkMode} isLightMode={isLightMode} />
          }
        ></Route>
        <Route
          path="/article/:articleID"
          element={
            <Article
              user={user}
              isDarkMode={isDarkMode}
              isLightMode={isLightMode}
              setCreateCommentIsOpened={setCreateCommentIsOpened}
            />
          }
        >
          <Route
            path="comments"
            element={
              <Comments
                user={user}
                isDarkMode={isDarkMode}
                isLightMode={isLightMode}
                createCommentIsOpened={createCommentIsOpened}
                setCreateCommentIsOpened={setCreateCommentIsOpened}
              />
            }
          >
            <Route
              path="comment"
              element={
                <Comment
                  user={user}
                  setCreateCommentIsOpened={setCreateCommentIsOpened}
                  isDarkMode={isDarkMode}
                  isLightMode={isLightMode}
                />
              }
            ></Route>
          </Route>
        </Route>

        <Route path="/users" element={<Users />} />

        {/* <Route path="/profile" element={<Profile user={user} />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
