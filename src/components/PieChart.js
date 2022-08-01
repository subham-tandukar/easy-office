import React,{useContext} from "react";
import { ThemeContext } from "./ThemeContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Bargraph = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="card-box" style={theme}>
        <h3 className="card-title" style={theme}>Pie Chart</h3>
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
