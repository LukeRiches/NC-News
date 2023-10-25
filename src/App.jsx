import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Article from "./components/Article";


function App() {
  const [user, setUser] = useState("Login");
  const [articleID, setArticleID] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const [topic, setTopic] = useState("");
  // const [sortBy, setsortBy] = useState("");
  // const [order, setOrder] = useState("");
  // const [commentBody, setCommentBody] = useState("");


  return (
    <div className="App">
      <Header user={user} />
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics" element={<Topics isLoading={isLoading} setIsLoading={setIsLoading}  error={error} setError={setError} /*topic={topic} setTopic={setTopic}*/ />}></Route>
        <Route path="/articles" element={<Articles isLoading={isLoading} setIsLoading={setIsLoading}  error={error} setError={setError} setArticleID={setArticleID}/>}></Route>
        <Route path="/article" element={<Article articleID={articleID} isLoading={isLoading} setIsLoading={setIsLoading} error={error} setError={setError}></Article>}></Route>
        {/* <Route path="/users" element={<Users/>}></Route> */}
        {/* <Route path="/login" element={<Login setUser={setUser} />}></Route> */}
        {/* <Route path="/profile" element={<Profile user={user} />}></Route> */}
        {/* <Route path="/sign_up" element={<SignUp />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
