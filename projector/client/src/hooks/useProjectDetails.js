import { useEffect, useState } from "react";
import axios from "axios";

export default function useProjectDetails(initialState, id, history) {
  console.log("history:", history);
  const [projectInfo, setProjectInfo] = useState(initialState);
  const { title, description, project } = projectInfo;

  const [editForm, setEditForm] = useState(false);
  const [taskForm, setTaskForm] = useState(false);

  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setProjectInfo({ ...projectInfo, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // if the axios call works we know we only need the data part, so we can destructure it already
      const { data } = await axios.put(`/api/projects/${id}`, {
        title,
        description,
      });
      setProjectInfo({
        project: data,
        title: data.title,
        description: data.title,
      });
      setEditForm(false);
    } catch (error) {
      console.log("error:", error);
    }
  }

  async function getSingleProjectData() {
    try {
      const { data } = await axios.get(`/api/projects/${id}`);
      setProjectInfo({
        project: data,
        title: data.title,
        description: data.description,
      });
    } catch (error) {
      console.log("error:", error);
      if (error.response.status === 404) {
        setError("Not found");
      }
    }
  }

  async function deleteProject() {
    console.log("test");
    //  return;
    try {
      await axios.delete(`/api/projects/${id}`);
      //   console.log('test:', test)
      history.push("/projects");
    } catch (error) {
      console.log("error:", error);
    }
  }

  function toggleEditForm() {
    setEditForm(!editForm);
    // another way to write is: setEditForm(prev => !prev)
  }

  function toggleTaskForm() {
    setTaskForm(!taskForm);
  }

  function closeTaskForm() {
    setTaskForm(false);
  }

  useEffect(() => {
    getSingleProjectData(); // here you might get a warning saying that you should add the get data to the list of dependencies. you can ignore this warning
  }, []); // id -> whenever the id changes, the get data function gets called

  return {
    project,
    toggleEditForm,
    toggleTaskForm,
    deleteProject,
    handleSubmit,
    handleChange,
    editForm,
    taskForm,
    projectInfo,
    error,
    closeTaskForm,
    // getData: getSingleProjectData,
  };
}
