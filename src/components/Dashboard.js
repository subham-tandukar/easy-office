import React,{useContext} from "react";
import Navbar from "./Navbar";
import SideContent from "./SideContent";
import SidePanel from "./SidePanel";
import { ThemeContext } from "./ThemeContext";


const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="dashboard">
        <Navbar/>
        <div className="uk-grid content__wrapper">
          <div>
            <SidePanel/>
          </div>

          <div className="uk-width-expand" style={theme}>
            <SideContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
