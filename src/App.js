import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/session/LoginForm";
import RegistrationForm from "./components/session/RegistrationForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
