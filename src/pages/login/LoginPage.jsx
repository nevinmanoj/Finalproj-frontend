import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"
function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (<div className="login-row"><div className="vector-art">
    art will come </div> <div className="login-form">


      <form onSubmit={handleLoginFormSubmit}>
        <div className="username-box">
          {/* <label htmlFor="username">Username:</label> */}
          <input
            placeholder="Username/Email"
            type="text"
            className="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="password-box">
          {/* <label htmlFor="password">Password:</label> */}
          <input
            placeholder="Password"
            type="password"
            className="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="Sign-In-Button-div"><button type="submit" className="Sign-In-Button" onClick={() => { navigate('/') }}>Sign In</button></div>
        <div className="toSignup">Do not have an  Account?  <div onClick={() => { navigate('/register') }}><span className="log-in-text">Log In</span></div></div>
      </form>
    </div>

  </div>

  );
}
export default LoginPage;
