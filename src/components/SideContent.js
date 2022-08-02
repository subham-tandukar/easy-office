import React from "react";
import Bargraph from "./Bargraph";
import Employee from "./Employee";
import PieChart from "./PieChart";
import ProjectDetails from "./ProjectDetails";
import Statistics from "./Statistics";
import TodayAbsent from "./TodayAbsent";

const SideContent = () => {
  return (
    <>
      <section className="side__content">
        <div>
          <Employee/>
        </div>
        <div className="uk-grid uk-grid-match uk-child-width-1-2@s">
          <div>
            <Bargraph />
          </div>

          <div>
            <PieChart />
          </div>

          <div className="uk-flex-middle">
            <TodayAbsent />
          </div>

          <div>
            <Statistics/>
          </div>

          <div className="uk-width-1">
            <ProjectDetails/>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideContent;
