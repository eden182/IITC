import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  // Navigation functions
  function handleLogin() {
    navigate(-1);
  }

  function handleGooglePlay() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en";
  }

  function handleMicrosoftApps() {
    window.location.href =
      "https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=US";
  }

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field.trim())) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }

    console.log(formData);

    if (formData.password.length < 6) {
      setMessage({
        type: "error",
        text: "Password must be at least 6 characters long!",
      });
      return;
    }
    registerUser();
  };

  const registerUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/sign-up",
        formData
      );
      console.log(response);

      setMessage({
        type: "success",
        text: "Signup successful! Redirecting...",
      });
      setTimeout(() => navigate(-1), 2000);
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.error || "Something went wrong. Try again.",
      });
    }
  };

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
        {message.text && (
          <p className={message.type === "error" ? "error" : "success"}>
            {message.text}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Mobile number or email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            name="name"
            type="text"
            placeholder="Fullname"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <p className="text">
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </p>
          <p className="text">
            By signing up, you agree to our Terms, Privacy Policy, and Cookies
            Policy.
          </p>
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div className="bottom-right-container">
        <div className="bottom-right">
          <p className="p">
            Have an account?{" "}
            <span className="changePagesButton" onClick={handleLogin}>
              Log in
            </span>
          </p>
        </div>
      </div>
      <p className="p">Get the app.</p>
      <div className="appButtonsCon">
        <button className="googlePlay" onClick={handleGooglePlay}></button>
        <button className="microsoft" onClick={handleMicrosoftApps}></button>
      </div>
    </div>
  );
};

export default SignUp;
