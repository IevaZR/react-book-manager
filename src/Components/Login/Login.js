import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {

    
  return (
    <div className="LoginWrapper">
      <h3>Please log in</h3>
      <form className="LoginForm">
        <label>Email</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button className="LoginFormBtn">Log In</button>
      </form>
      <Link to="/register" className="LinkToRegister">Or click here to register</Link>
      
    </div>
  );
};

export default Login;
