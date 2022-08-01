import React, { useContext, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [themeText, setThemeText] = useState("Enable dark mode");

  const toggletheme = () => {
    if (theme.background == "#fff") {
      setTheme({
        background: "#242424",
        color: "#fff",
      });
      setThemeText("Enable light mode");
    } else {
      setTheme({
        background: "#fff",
        color: "#000",
      });
      setThemeText("Enable dark mode");
    }
  };
  return (
    <>
      <nav>
        <div className="uk-grid uk-flex-middle">
          <div style={{ width: "250px" }}>
            <img
              src="images/logo.png"
              alt="logo"
              style={{ height: "50px" }}
              className="uk-margin-auto uk-display-block"
            />
          </div>

          <div className="uk-width-expand">
            <div className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
              <div>
                <h3>
                  <span className="uk-margin-remove">Easy</span> Office
                </h3>
                <p>Head Office</p>
                <p>Bharatpur Nepal, 027-400078</p>
              </div>

              <div>
                <span>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    defaultChecked
                    onClick={toggletheme}
                  />
                  <span>{themeText}</span>
                </span>

                <span>
                  <select name="" id="">
                    <option value="">English</option>
                    <option value="">Nepali</option>
                    <option value="">Poland</option>
                  </select>
                </span>

                <span className="notification">
                  <FaRegBell size="1.3rem" />
                  <span className="uk-badge">3</span>
                </span>

                <span className="user">
                  <img src="images/img.jpg" alt="user" />
                  <span>Kulraj</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
