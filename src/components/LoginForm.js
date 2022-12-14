import React, { useState } from "react";
import $ from "jquery";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash, FaUserCircle } from "react-icons/fa";
import { BsFillKeyFill } from "react-icons/bs";

const LoginForm = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password");
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
    const { userName, password } = data;
    if (userName === "") {
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
    if (userName != "" && password != "") {
      axios
        .post("", {
          userName: data.userName,
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

  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
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
          <div className="username-input">
            <div className="uk-position-relative">
            <input
              type="text"
              className="uk-input"
              value={data.userName}
              onChange={handleData}
              autoComplete="off"
              id="userName"
              placeholder="Username"
              onKeyPress={handleUsername}
              required
            />
            <span className="username-icon"><FaUserCircle color="#0049ae" size="1.5rem"/></span>
            </div>
            <span style={color}>{invalidUsername}</span>
          </div>

          <div className="password-input">
            <div className="uk-position-relative">
              <input
                type={passwordType}
                className="uk-input"
                value={data.password}
                onChange={handleData}
                id="password"
                placeholder="Password"
                onKeyPress={handlePassword}
                required
              />
              <span className="password-icon"><BsFillKeyFill color="#0049ae" size="1.5rem"/></span>
              <span
                className="toggle-password"
                uk-toggle="target: .toggle"
                onClick={showPassword}
              >
                <i className="toggle" title="Show Password">
                  <FaRegEyeSlash />
                </i>
                <i className="toggle" title="Hide Password" hidden>
                  <FaRegEye />
                </i>
              </span>
            </div>
            <span style={color}>{invalidPassword}</span>
          </div>

          <button className="uk-button" onClick={handleLogin}>
            <span></span> login
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
