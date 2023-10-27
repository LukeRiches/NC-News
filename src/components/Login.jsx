import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ErrorPage from './ErrorPage';


function Login ({setUser, isLoading, setIsLoading, error, setError}) {
    const navigate = useNavigate();
    const [input, setInput] = useState("")
    const [validUsers, setValidUsers] = useState([])
    const [isValidUser, setIsValidUser] = useState()

    function inputOnChange(event) {
        const value = event.target.value;
        setInput(value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)
        const check = validUsers.filter((user)=>{
            return user.username === input
        })
        if(check.length > 0){
            setIsLoading(false)
            setIsValidUser(true)
            setUser(input);
            navigate('/'); 
        } else {
            setIsLoading(false)
            setIsValidUser(false)
            setInput("")
        }

    }

    useEffect(() => {
        setIsLoading(false)
        axios
          .get(
            `https://northcoders-news-api-phe8.onrender.com/api/users`
          )
          .then(({ data }) => {
            if(data.msg){
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

    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <ErrorPage error={error}/>
    }
    if(isValidUser === false){
        return (
            <main>
                <p id='SideNote'>No user authentication currently as the BE users don't have passwords, but an example username is 'cooljmessy'</p>
                <p>Please enter a valid Username</p>
            <form className="Login" onSubmit={(e)=>{handleSubmit(e)}}>
                <span id='Input'>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={input} onChange={inputOnChange} required={true}/>
                </span>
                <span id='Input'>
                <label htmlFor="password">Password: </label>
                <input name="password" id="password"/>
                </span>
                <span id="Submit">
                    <button type="submit" >Submit</button>
                </span>
            </form>
            <Link to="/sign_up"><button>Sign Up</button></Link>
        </main>
        )
    }
    return (
        <main>
            <p>No user authentication currently as the BE users don't have passwords, but an example username is 'cooljmessy'</p>
            <form className="Login" onSubmit={(e)=>{handleSubmit(e)}}>
                <span id='Input'>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={input} onChange={inputOnChange} required={true}/>
                </span>
                <span id='Input'>
                <label htmlFor="password">Password: </label>
                <input name="password" id="password"/>
                </span>
                <span id="Submit">
                    <button type="submit" >Submit</button>
                </span>
            </form>
            <Link to="/sign_up"><button>Sign Up</button></Link>
        </main>
    );
}

export default Login;