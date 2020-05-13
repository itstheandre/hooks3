import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";
import useLogic from "../hooks/useLogic";

export default function Projects2(props) {
  const { projects, getProjects } = useLogic();
  console.log("projects:", projects);

  // React.useEffect(() => {
  //   getProjects();
  //   console.log("mounted");
  // }, []);

  return (
    <div className="projects-container">
      <AddProject getData={getProjects} user={props.user} />
      <ProjectList projects={projects} user={props.user} />
    </div>
  );
}

// export default class Projects extends Component {
//   state = {
//     projects: [],
//   };

//   componentDidMount = () => {
//     console.log("something");
//     this.getData();
//   };

//   getData = () => {
//     axios
//       .get("/api/projects")
//       .then((response) => {
//         console.log(response.data);
//         this.setState({
//           projects: response.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div className="projects-container">
//         <AddProject getData={this.getData} />
//         <ProjectList projects={this.state.projects} />
//       </div>
//     );
//   }
// }
