import {Link} from "react-router-dom"

function Header({user}) {
  if(user === "Login"){
    return (
    <header>
        <h1>NC News</h1>
          <Link to="/login">
            <span>
                {user}
            </span>
          </Link>
    </header>
  )
  } else {
    return (
    <header>
        <h1>NC News</h1>
          {/* <Link to="/profile"> */}
            <span>
                {user}
            </span>
          {/* </Link> */}
    </header>
    )
  }
  
}

export default Header