import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Reset from "./Pages/Reset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/sign-in"} replace />} />
        <Route path="/home" element={<Home />} /> {/* נתיב נוסף לדף הבית */}
        <Route path="/sign-in" element={<SignInPage />} />
        {/* נתיב לעמוד ההתחברות */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
