import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Bargraph = () => {
  return (
    <>
      <section className="card-box">
        <h2 className="card-title">Pie Chart</h2>
        <div>
          <Pie
            height={400}
            width={600}
            data={{
              datasets: [
                {
                  label: "Numbers",
                  data: [10, 15, 13],
                  backgroundColor: ["#A3B6D1","#0049ae","#6C9BD1"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </section>
    </>
  );
};

export default Bargraph;
