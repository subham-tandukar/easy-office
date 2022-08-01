import React,{useContext} from "react";
import { ThemeContext } from "./ThemeContext";

const todayAbsent = [
  {
    id: 1,
    img: "images/img.jpg",
    name: "Khulraj",
    leaveDate: "Leave Date",
    date: "2079/04/11",
    background: "#E6EDF7",
    color : "#000",
  },
  {
    id: 2,
    img: "images/img.jpg",
    name: "Khulraj",
    leaveDate: "Leave Date",
    date: "2079/04/11",
    background: "#fff",
    color : "#000",
  },
  {
    id: 3,
    img: "images/img.jpg",
    name: "Khulraj",
    leaveDate: "Leave Date",
    date: "2079/04/11",
    background: "#E6EDF7",
    color : "#000",
  },
];

const TodayAbsent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="card-box uk-padding-remove" style={theme}>
        <h3 className="card-title" style={theme}>Today Absent</h3>
        {todayAbsent.map((props) => {
          const { id, img, name, leaveDate, date, background,color } = props;

          return (
            <div
              className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap today-absent"
              style={{ background: background }}
              key={id}
            >
              <div>
                <img src={img} alt="" />
                <span className="uk-text-bold" style={{color:color}}>
                  {name}
                </span>
              </div>

              <div>
                <p className="uk-text-bold">{leaveDate}</p>
                <p>{date}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TodayAbsent;
