import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  // handle functions
  function handleLogin() {
    navigate("../");
  }

  function handleGooglePlay() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en";
  }

  function handleMicrosoftApps() {
    window.location.href =
      "https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=US";
  }

  return (
    <div className="right2">
      <div className="topRight">
        <div className="hlLogo"></div>
        <p className="text">
          Sign up to see photos and videos from your friends.
        </p>
        <button className="facebookLog2">
          <div className="facebookIcon2"></div>Log in with Facebook
        </button>
        <form>
          <label htmlFor="email"></label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email"
            placeholder="Mobile number or email"
          />
          <label htmlFor="password"> </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <input placeholder="Fullname"></input>
          <input placeholder="Username"></input>
          <p className="text">
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </p>
          <p className="text">
            By signing up, you agree to our Terms , Privacy Policy and Cookies
            Policy .
          </p>
          <button type="submit">sign up</button>
        </form>
      </div>
      <div className="bottom-right-container">
        <div className="bottom-right">
          <p className="p">
            Have an account?
            <span className="changePagesButton" onClick={handleLogin}>
              log in
            </span>
          </p>
        </div>
      </div>
      <p className="p"> Get the app.</p>
      <div className="appButtonsCon">
        <button className="googlePlay" onClick={handleGooglePlay}></button>
        <button className="microsoft" onClick={handleMicrosoftApps}></button>
      </div>
    </div>
  );
};

export default SignUp;
