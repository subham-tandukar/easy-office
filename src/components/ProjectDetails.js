import React from "react";

const projectDetails = [
  {
    id: 1,
    name: "Project Name",
    status: "Status",
    fontWeight: "bold",
    background: "#E6EDF7",
  },
  {
    id: 2,
    name: "Project Name",
    status: "Completed",
    fontWeight: "regular",
    background: "#fff",
  },
  {
    id: 3,
    name: "Project Name",
    status: "Completed",
    fontWeight: "regular",
    background: "#E6EDF7",
  },
  {
    id: 4,
    name: "Project Name",
    status: "Completed",
    fontWeight: "regular",
    background: "#fff",
  },
  {
    id: 5,
    name: "Project Name",
    status: "Completed",
    fontWeight: "regular",
    background: "#E6EDF7",
  },
];

const ProjectDetails = () => {
  return (
    <>
      <section className="card-box" style={{ padding: "0.5rem 0 0 0" }}>
        <h3 className="card-title">Project Details</h3>
        {projectDetails.map((props) => {
          const { id, name, status, background, fontWeight } = props;
          return (
            <div key={id}>
              <div
                className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap project-details"
                style={{ background: background }}
              >
                <div>
                  <p style={{ fontWeight: fontWeight }}>{name}</p>
                </div>
                <div>
                  <p style={{ fontWeight: fontWeight }}>{status}</p>
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
