import "./Reset.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("../");
  }

  function handleSignUp() {
    navigate("../sign-up");
  }

  function handleHelpCenter() {
    window.location.href = "https://help.instagram.com/374546259294234";
  }

  return (
    <>
      <div className="reset">
        <header>
          <div className="instagramIcon"></div>
        </header>
        <div className="container2">
          <div className="lockLogo">&#128274;</div>
          <h2 className="h2">Trouble logging in?</h2>
          <p className="p2">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
          <input className="emailInput" placeholder="email here"></input>
          <button className="verifyButton">Send Verification</button>
          <span className="helpButton" onClick={handleHelpCenter}>
            can't reset your password
          </span>
          <div className="lineCon2">
            <span className="line2"></span>
            <span className="p2" id="or2">
              OR
            </span>
            <span className="line2"></span>
          </div>
          <span className="backToLogButton" onClick={handleSignUp}>
            create new account
          </span>
          <button
            onClick={handleLogin}
            style={{
              display: "flex",
              width: "420px",
              height: "45px",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <b>Back to Login</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Reset;
