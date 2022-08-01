import React from "react";

const todayAbsent = [
  {
    id: 1,
    img: "images/img.jpg",
    name: "Khulraj",
    leaveDate: "Leave Date",
    date: "2079/04/11",
    background: "#E6EDF7",
  },
  {
    id: 2,
    img: "images/img.jpg",
    name: "Khulraj",
    leaveDate: "Leave Date",
    date: "2079/04/11",
    background: "#fff",
  },
  {
    id: 3,
    img: "images/img.jpg",
    name: "Khulraj",
    leaveDate: "Leave Date",
    date: "2079/04/11",
    background: "#E6EDF7",
  },
];

const TodayAbsent = () => {
  return (
    <>
      <section className="card-box" style={{ padding: "0.5rem 0 0 0" }}>
        <h3 className="card-title">Today Absent</h3>
        {todayAbsent.map((props) => {
          const { id, img, name, leaveDate, date, background } = props;

          return (
            <div
              className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap today-absent"
              style={{ background: background }}
              key={id}
            >
              <div>
                <img src={img} alt="" />
                <span className="uk-text-bold" style={{ color: "#000" }}>
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
