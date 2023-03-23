import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <label>Password: </label>
            <input />
            <Link to="/home">
            <button>click me!</button>
            </Link>
            
        </div>
    );
}

export default Login;
