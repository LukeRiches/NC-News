import {useNavigate, Link} from 'react-router-dom';


function Login ({setUser}) {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setUser(e.target[0].value);
        navigate('/');
    }

    return (
        <main>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <label htmlFor="username">Username: </label>
                <input name="username" id="username"/>
                <label htmlFor="password">Password: </label>
                <input name="password" id="password"/>
                <button type="submit" >submit</button>
            </form>
            <Link to="/sign_up">Sign Up</Link>
        </main>
    );
}

export default Login;