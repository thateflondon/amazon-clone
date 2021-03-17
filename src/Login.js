import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  //Sign-In
  const signIn = (e) => {
    e.preventDefault();
    //firebase login
  };


  //Register
  const register = (e) => {
    e.preventDefault();
    //firebase register
  };

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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>

          <p>
            By signing-in you agree to the AMAZON CLONE Conditions of Use &
            Sale. Please see our Prevacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice
          </p>

          <button onClick={register} className="login__registerButton">
            Create your Amazone Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
