import React from "react";
import Navbar from "./Navbar";
import SideContent from "./SideContent";
import SidePanel from "./SidePanel";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <Navbar/>
        <div className="uk-grid">
          <div>
            <SidePanel/>
          </div>

          <div className="uk-width-expand">
            <SideContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
