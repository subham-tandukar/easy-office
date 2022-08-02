import React from "react";
import LoginForm from "./LoginForm";
import LoginImg from "./LoginImg";

const LoginPage = () => {
  return (
    <>
      <nav className="uk-container uk-container-expand uk-margin-top uk-margin-bottom">
        <img src="images/logo.png" alt="logo" style={{height:"60px"}} className="uk-margin-left"/>
      </nav>

      <section className="login__page uk-container">
        <div className="uk-grid uk-child-width-1-2">
          <div className="login-img-wrapper">
            <LoginImg />
          </div>

          <div className="login-form-wrapper">
            <LoginForm />
          </div>
        </div>
      </section>

      <span className="copyright"> &copy; 2022 Easy Software Pvt. Ltd. All Rights Reserved</span>
    </>
  );
};

export default LoginPage;
