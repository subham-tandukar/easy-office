import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form>
        Email:
        <input type="text" value={email} onChange={handleEmail} required />
        <br />
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <br />
        <button onClick={handleLogin}>login</button>
      </form>
    </>
  );
};

export default App;
