import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
