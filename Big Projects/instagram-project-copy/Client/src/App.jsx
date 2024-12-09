import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./Pages/SignFile/SignInPage";
import SignUp from "./Pages/SignFile/SignUp";
import Reset from "./Pages/SignFile/Reset";
import Home from "./Pages/HomeFile/Home";
import Search from "./Pages/Search/Search";
import Message from "./Pages/Message/Message";
import Profile from "./Pages/Profile/Profile";
import Create from "./Pages/Create/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/sign-in"} replace />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
