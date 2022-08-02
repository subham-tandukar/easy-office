import React, { useContext, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, setTheme, sideMenu, setSideMenu } = useContext(ThemeContext);

  const [themeText, setThemeText] = useState("Enable dark mode");
  const [mobNav, setMobNav] = useState(true);

  const handleToggle = () => {
    setSideMenu(!sideMenu);
  };

  const toggletheme = () => {
    if (theme.background === "#fff") {
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
        <div className="uk-grid uk-flex-middle uk-flex-between">
          <div className="logo">
            <img
              src="images/logo.png"
              alt="logo"
              style={{ height: "50px" }}
              className="uk-margin-auto uk-display-block"
            />
            <div className="ham-menu">
              <span uk-toggle="target: .toggle">
                <i className="toggle">
                  <GiHamburgerMenu
                    className="ham-icon"
                    color="#777"
                    size="1.5rem"
                    onClick={handleToggle}
                  />
                </i>
                <i className="toggle" hidden>
                  <IoMdClose
                    color="#777"
                    size="2rem"
                    className="close-icon"
                    onClick={handleToggle}
                  />
                </i>
              </span>
            </div>
          </div>

          <div className="uk-width-expand" id="large-nav">
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
          <div
            className="dots-icon"
            onClick={() => {
              setMobNav(!mobNav);
            }}
          >
            <BsThreeDotsVertical className="dots" />
          </div>
        </div>

        <div id="mob-nav" className={`${mobNav ? "mob-nav" : ""}`}>
          <div className="uk-margin-bottom">
            <h3>
              <span className="uk-margin-remove">Easy</span> Office
            </h3>
            <p>Head Office</p>
            <p>Bharatpur Nepal, 027-400078</p>
          </div>

          <div className="uk-margin-bottom">
            <span className="uk-padding">
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
          </div>

          <div className="uk-margin-bottom">
            <span>
              <select name="" id="">
                <option value="">English</option>
                <option value="">Nepali</option>
                <option value="">Poland</option>
              </select>
            </span>
          </div>

          <div className="uk-margin-bottom">
            <span className="notification">
              <FaRegBell size="1.3rem" />
              <span className="uk-badge">3</span>
            </span>
          </div>

          <div className="uk-margin-bottom">
            <span className="user">
              <img src="images/img.jpg" alt="user" />
              <span>Kulraj</span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
