import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Bargraph = () => {
  return (
    <>
      <section className="card-box">
        <h3 className="card-title">Bar Graph</h3>
        <div>
          <Bar
            height={400}
            width={600}
            data={{
              labels: [0, 1, 2, 3, 4, 5],
              datasets: [
                {
                  label: "Numbers",
                  data: [10, 15, 13, 2, 5, 9],
                  backgroundColor: "#6C9BD1",
                  borderWidth: 1,
                },
                {
                  label: "Quantity",
                  data: [13, 12, 10, 9, 7, 6],
                  backgroundColor: "#0049ae",
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
