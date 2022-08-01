import React,{useContext} from "react";
import { ThemeContext } from "./ThemeContext";

const projectDetails = [
  {
    id: 1,
    name: "Project Name",
    status: "Status",
    fontWeight: "uk-text-bold",
    background: "#E6EDF7",
  },
  {
    id: 2,
    name: "Project Name",
    status: "Completed",
    fontWeight: "uk-text-normal",
    background: "#fff",
  },
  {
    id: 3,
    name: "Project Name",
    status: "Completed",
    fontWeight: "uk-text-normal",
    background: "#E6EDF7",
  },
  {
    id: 4,
    name: "Project Name",
    status: "Completed",
    fontWeight: "uk-text-normal",
    background: "#fff",
  },
  {
    id: 5,
    name: "Project Name",
    status: "Completed",
    fontWeight: "uk-text-normal",
    background: "#E6EDF7",
  },
];

const ProjectDetails = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="card-box uk-margin-large-bottom uk-padding-remove" style={theme}>
        <h3 className="card-title" style={theme}>Project Details</h3>
        {projectDetails.map((props) => {
          const { id, name, status, background, fontWeight } = props;
          return (
            <div key={id}>
              <div
                className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap project-details"
                style={{ background: background }}
              >
                <div>
                  <p className={fontWeight}>{name}</p>
                </div>
                <div>
                  <p className={fontWeight}>{status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProjectDetails;
