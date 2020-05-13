import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useAdd } from "../hooks/useAdd";

export default function AddTask({ projectId, getData, hideForm }) {
  const addTaskInitialState = {
    title: "",
    description: "",
    projectId: projectId,
  };

  const { title, description, addTask, handleChange } = useAdd(
    addTaskInitialState,
    getData,
    hideForm,
  );

  return (
    <div>
      <h2>Add task: </h2>
      <Form onSubmit={addTask}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
}

// class AddTask extends Component {
//   state = {
//     title: "",
//     description: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const { title, description } = this.state;

//     axios
//       .post("/api/tasks", {
//         title,
//         description,
//         projectId: this.props.projectId,
//       })
//       .then(() => {
//         this.props.getData();
//         this.props.hideForm();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Add task: </h2>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Group>
//             <Form.Label>Title:</Form.Label>
//             <Form.Control
//               type="text"
//               name="title"
//               value={this.state.title}
//               onChange={this.handleChange}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Description:</Form.Label>
//             <Form.Control
//               type="text"
//               name="description"
//               value={this.state.description}
//               onChange={this.handleChange}
//             />
//           </Form.Group>

//           <Button type="submit">Add</Button>
//         </Form>
//       </div>
//     );
//   }
// }
