import { blue } from "@material-ui/core/colors";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./register.css"
function SignupPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Name:", name);
    console.log("Password:", password);
  };

  return (<div className="login-row"><div className="vector-art">
    art will come </div> <div className="login-form">


      <form onSubmit={handleLoginFormSubmit}>
        <div className="name-box">
          {/* <label htmlFor="username">Username:</label> */}
          <input
            placeholder="Name"
            type="text"
            className="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="username-box">
          {/* <label htmlFor="username">Username:</label> */}
          <input
            placeholder="Email"
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
        <div className="Sign-In-Button-div"><button type="submit" className="Sign-In-Button" onClick={() => { navigate('/') }}>Sign Up</button></div>
        <div className="toSignup" >Already have an Account?  <div onClick={() => { navigate('/login') }}><span className="log-in-text">Log In</span></div></div>
      </form>
    </div >

  </div >

  );
}
export default SignupPage;