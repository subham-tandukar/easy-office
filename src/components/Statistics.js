import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const statistics = [
  {
    id: 1,
    title: "Statistics",
    width: "25%",
    background: "#0049ae",
  },
  {
    id: 2,
    title: "Statistics",
    width: "90%",
    background: "#A600F4",
  },
  {
    id: 3,
    title: "Statistics",
    width: "50%",
    background: "#00FF19",
  },
  {
    id: 4,
    title: "Statistics",
    width: "10%",
    background: "#FF0000",
  },
];

const Statistics = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="card-box" style={theme}>
        <h3 className="card-title" style={theme}>
          Statistics
        </h3>

        {statistics.map((props) => {
          const { id, title, width, background } = props;

          return (
            <div key={id} className="statistics">
              <div className="uk-flex uk-flex-between uk-flex-middle">
                <p style={theme}>{title}</p>
                <p style={theme}>{width}</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: width, background: background }}
                ></div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Statistics;
