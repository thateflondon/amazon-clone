import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.ladn.eu/wp-content/uploads/2018/01/amazon.jpg?v=16"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>

          <p>
            By signing-in you agree to the AMAZON CLONE Conditions of Use &
            Sale. Please see our Prevacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice
          </p>

          <button className="login__registerButton">
            Create your Amazone Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
