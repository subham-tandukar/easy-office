import React ,{useContext} from "react";
import sidePanelList from "./SidePanelListAPI";
// import { ThemeContext } from "./ThemeContext";

const SidePanel = () => {
  // const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className="side__panel side-panel-width" >
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
                    {listIcon}
                    <p
                      className="uk-margin-remove"
                      id="list"
                      style={{ color: "#fff" }}
                    >
                      {list}
                      <span
                        uk-icon="icon: chevron-right"
                        className="dropdown-icon"
                        style={{ display: icon }}
                      ></span>
                    </p>
                  </a>
                  <div
                    className="uk-accordion-content uk-margin-remove-top"
                    style={{ display: dropdownList }}
                    id="uk-accordion-content"
                  >
                    <ul className="uk-nav uk-dropdown-nav">
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
                  </div>
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
