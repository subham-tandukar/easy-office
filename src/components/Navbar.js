import React from "react";
import { FaToggleOff } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="uk-grid uk-flex-middle">
          <div style={{width:"250px"}}>
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
                  <span>Easy</span> Office
                </h3>
                <p>Head Office</p>
                <p>Bharatpur Nepal, 027-400078</p>
              </div>

              <div>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
