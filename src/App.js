import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: data.email,
        password: data.password,
      })
      .then(result => {
        console.log(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <form>
        Email:
        <input
          type="text"
          value={data.email}
          onChange={handleData}
          autoComplete="off"
          id="email"
          required
        />
        <br />
        Password:
        <input
          type="password"
          value={data.password}
          onChange={handleData}
          id="password"
          required
        />
        <br />
        <button onClick={handleLogin}>login</button>
      </form>
    </>
  );
};

export default App;
