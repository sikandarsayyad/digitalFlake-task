import React from "react";
import "./SignInPage.css";
import Logo from "../images/Logo&name.png";
import backgroundImage from "../images/background.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninPage(Props) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form
      className="main--container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="signimForm">
        <div className="title">
          <div className="Home">
            <img src={Logo} alt="logo" />
            <h3>Welcome to DigitalFlack Admin</h3>
          </div>
        </div>
        <div>
          <input
            placeholder="Email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <h4>Forgot Password?</h4>
        </div>
        <button type="submit" onClick={handleSubmit} disabled={!validateForm()}>
          <Link to="/">
            <p>Log In</p>
          </Link>
        </button>
      </div>
    </form>
  );
}
