import React from "react";
import { Link } from "react-router-dom";
import useLogic from "../hooks/useLogic";

const ProjectList = (props) => {
  console.log("props:", props);
  return (
    <div>
      {props.projects.length > 0 && <h2>Projects:</h2>}

      {props.projects.map((project) => {
        return (
          <div key={project._id}>
            <h3>
              <Link to={`/projects/${project._id}`}>{project.title}</Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
