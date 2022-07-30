import React, { useState } from "react";
import $ from "jquery";
import axios from "axios";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [invalidUsername, setInvalidUsername] = useState("");
  const [invalidPassword, setInvalidPassword] = useState("");
  const [color, setColor] = useState({
    color: "",
  });

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email === "") {
      setInvalidUsername("Username is required*");
      setColor({
        color: "#ff4949",
      });
    }
    if (password === "") {
      setInvalidPassword("Password is required*");
      setColor({
        color: "#ff4949",
      });
    }
    if (email != "" && password != "") {
      axios
        .post("url", {
          email: data.email,
          password: data.password,
        })
        .then((result) => {
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleUsername = () => {
    setInvalidUsername("");
  };

  const handlePassword = () => {
    setInvalidPassword("");
  };

  $(function () {
    $(".uk-button")
      .on("mouseenter", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({ top: relY, left: relX });
      })
      .on("mouseout", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({ top: relY, left: relX });
      });
    // $("[href=!#]").onClick(function() {
    //   return false;
    // });
  });

  return (
    <>
      <section className="login__form">
        <h3>
          Login <span>Now!</span>
        </h3>
        <h5>Enter your valid credentials below.</h5>
        <form>
          <input
            type="text"
            className="uk-input"
            value={data.email}
            onChange={handleData}
            autoComplete="off"
            id="email"
            placeholder="Username"
            onKeyPress={handleUsername}
            required
          />
          <span style={color}>{invalidUsername}</span>

          <input
            type="password"
            className="uk-input"
            value={data.password}
            onChange={handleData}
            id="password"
            placeholder="Password"
            onKeyPress={handlePassword}
            required
          />
          <span style={color}>{invalidPassword}</span>

          <button className="uk-button" onClick={handleLogin}>
            {" "}
            <span></span> login
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
