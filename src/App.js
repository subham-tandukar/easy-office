import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <>
      <LoginPage />
      <Dashboard />
    </>
  );
};

export default App;
