import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const pswdRef = useRef();
  const navigate = useNavigate();

  // handle functions
  function handleNavigation(path) {
    navigate(path);
  }

  function handleGooglePlay() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en";
  }

  function handleMicrosoftApps() {
    window.location.href =
      "https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=US";
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(pswdRef.current.value);
    setBtnText("Loading...");
    setTimeout(() => {
      alert("Succefuly");
      setEmail("");
      pswdRef.current.value = "";
      setBtnText("Submit");
      setTimeout(() => {
        navigate("/home");
      }),
        1000;
    }),
      3000;
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="backgroundImage"></div>
        </div>
        <div className="right">
          <div className="topRight">
            <div className="hlLogo"></div>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="email"></label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                name="email"
                placeholder="Phone Number, username or email"
              />
              {/* Password */}
              <label htmlFor="password"> </label>
              <input
                ref={pswdRef}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <button type="submit">Log In</button>
              <div className="lineCon">
                <span className="line"></span>
                <span className="p" id="or">
                  OR
                </span>
                <span className="line"></span>
              </div>
            </form>
            <button className="facebookLog">
              <div className="facebookIcon"></div>Log in with Facebook
            </button>
            <p
              className="forgotPassword"
              onClick={() => handleNavigation("/reset")}
            >
              Forgot password?
            </p>
          </div>
          <div className="bottom-right-container">
            <div className="bottom-right">
              <p className="p">
                Don't have an account
                <span
                  className="changePagesButton"
                  onClick={() => handleNavigation("/sign-up")}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
          <p className="p"> Get the app.</p>
          <div className="appButtonsCon">
            <button className="googlePlay" onClick={handleGooglePlay}></button>
            <button
              className="microsoft"
              onClick={handleMicrosoftApps}
            ></button>
          </div>
        </div>
      </div>
      {/* <footer>
        Meta About Blog Jobs Help API Privacy Terms Locations Instagram Lite
        Threads Contact Uploading & Non-Users Meta Verified Settlement
        Agreements English English © 2024 Instagram from Meta
      </footer> */}
    </>
  );
};

export default SignInPage;
