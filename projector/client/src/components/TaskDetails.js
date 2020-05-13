import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

// in this component we dont really need a custom hook
export default function TaskDetails(props) {
  const { id } = props.match.params;
  const [task, setTask] = useState({ title: "", description: "", project: "" });

  useEffect(() => {
    axios
      .get(`/api/tasks/${id}`)
      .then((res) => {
        // const { title, description, project } = response.data; -> same thing as below 👇
        setTask({ ...res.data });
      })
      .catch(console.error);
  }, []); //empty array -> component did mount

  const { title, description, project } = task;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to={`/projects/${project}`}>Back to project</Link>
    </div>
  );
}

// export default class TaskDetails extends Component {
//   state = {
//     title: "",
//     description: "",
//     project: "",
//   };

//   componentDidMount() {
//     const taskId = this.props.match.params.id;

//     return axios
//       .get(`/api/tasks/${taskId}`)
//       .then((response) => {
//         const { title, description, project } = response.data;
//         this.setState({ title, description, project });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {
//     const task = {
//       title: this.state.title,
//       description: this.state.description,
//       project: this.state.project,
//     };

//     return (
//       <div>
//         <h1>{task.title}</h1>
//         <p>{task.description}</p>
//         <Link to={`/projects/${task.project}`}>Back to project</Link>
//       </div>
//     );
//   }
// }
