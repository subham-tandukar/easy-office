import React from "react";
import Bargraph from "./Bargraph";
import PieChart from "./PieChart";

const SideContent = () => {
  return (
    <>
      <section className="side__content">
        <div className="uk-grid uk-child-width-1-2">
          <div>
            <Bargraph />
          </div>

          <div>
            <PieChart />
          </div>
        </div>
      </section>
    </>
  );
};

export default SideContent;
