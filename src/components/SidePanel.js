import React, { useContext, useEffect, useState } from "react";
import sidePanelList from "./SidePanelListAPI";
import { ThemeContext } from "./ThemeContext";

const SidePanel = () => {
  const { sideMenu } = useContext(ThemeContext);

  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (hide) {
      document.querySelectorAll(".uk-accordion-content").forEach((el) => {
        el.classList.add("none");
      });
    } else {
      document.querySelectorAll(".uk-accordion-content").forEach((el) => {
        el.classList.remove("none");
      });
    }
  }, [hide]);

  return (
    <>
      <section
        className={`side__panel ${sideMenu ? "side-menu" : ""}`}
        onMouseOver={() => setHide(false)}
        onMouseLeave={() => setHide(!hide)}
      >
        <div className="side-panel-list">
          <ul uk-accordion="true">
            {sidePanelList.map((props) => {
              const {
                id,
                list,
                listIcon,
                dropdownList,
                dropdownList1,
                dropdownList2,
                dropdownList3,
                icon,
              } = props;

              return (
                <li
                  style={{ borderBottom: "1px solid #fff" }}
                  key={id}
                  className="uk-margin-remove"
                >
                  <a href="#" className="uk-accordion-title">
                    <div>{listIcon}</div>
                    <div>
                      <span
                        className="uk-margin-remove list"
                        style={{ color: "#fff" }}
                      >
                        {list}
                        <span
                          uk-icon="icon: chevron-right"
                          className="dropdown-icon"
                          style={{ display: icon }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <ul
                    className="uk-accordion-content uk-margin-remove-top uk-nav uk-dropdown-nav"
                    style={{ display: dropdownList }}
                    id="uk-accordion-content"
                  >
                    <li>
                      <a href="#" className="dropdown-list">
                        {dropdownList1}
                      </a>
                      <a href="#" className="dropdown-list">
                        {dropdownList2}
                      </a>
                      <a href="#" className="dropdown-list">
                        {dropdownList3}
                      </a>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SidePanel;
