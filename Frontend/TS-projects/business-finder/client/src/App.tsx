import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.tsx";
import SignUp from "./Pages/SignUp.tsx";
import Home from "./Pages/HomePage.tsx";
// import Profile from "./Pages/Profile";
// import Create from "./Pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/log-in"} replace />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
