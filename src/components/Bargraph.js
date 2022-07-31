import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Bargraph = () => {
  return (
    <>
      <section className="card-box">
        <h2 className="card-title">Bar Graph</h2>
        <div>
          <Bar
            height={400}
            width={600}
            data={{
              labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              datasets: [
                {
                  label: "Numbers",
                  data: [10, 15, 13, 2, 5, 11, 9, 12, 6, 5],
                  backgroundColor: "#6C9BD1",
                  borderWidth: 1,
                },
                {
                  label: "Quantity",
                  data: [13, 12, 10, 9, 7, 6, 8, 11, 13, 15],
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
