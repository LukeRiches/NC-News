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
import HeaderAndNav from "../HeaderAndNav";

function App() {
  const [user, setUser] = useState("Login");

  return (
    <div className="App">
      <Header user={user} />
      <Nav user={user} />
      {/* <HeaderAndNav user={user} /> */}
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        {/* <Route path="/sign_up" element={<SignUp />}></Route> */}
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/article/:articleID" element={<Article user={user} />}>
          <Route path="comments" element={<Comments user={user} />}>
            <Route path="comment" element={<Comment user={user} />}></Route>
          </Route>
        </Route>

        {/* <Route path="/users" element={<Users/>}></Route> */}
        {/* <Route path="/profile" element={<Profile user={user} />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
