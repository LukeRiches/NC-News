import {Link} from "react-router-dom"

function Nav({user}) {

  if(user === "Login"){
    return (
      <nav className="Nav">
      <Link to="/topics">Topics</Link>
      {" "}
      <Link to="/articles">Articles</Link>
      {" "}
      <Link to="/users">Users</Link>
      </nav>
    )
  } else {
    return (
    <nav className="Nav">
      <Link to="/topics">Topics</Link>
      {" "}
      <Link to="/articles">Articles</Link>
      {" "}
      <Link to="/users">Users</Link>
      {/* {" "}
      <Link to="/posts">Posts</Link> */}
    </nav>
  )
  }
  
}

export default Nav