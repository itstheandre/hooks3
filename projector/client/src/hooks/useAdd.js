import { useState } from "react";
import axios from "axios";

//im using export and not export default for you to see the differebce, no other particular reason
export function useAdd(initialState, getData, hideForm) {
  const [form, setForm] = useState(initialState);
  const { title, description } = form;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function addProject(e) {
    e.preventDefault();

    try {
      const newTask = await axios.post("/api/projects", form);
      // we set the form back to an object with both title and description as empty strings
      setForm(initialState);
      getData();
    } catch (e) {
      //   try catch allows us to code without the code breaking on us . We console log possible errors for now
      console.log("e:", e);
    }
  }

  async function addTask(e) {
    e.preventDefault();

    try {
      //  in this case, we are getting the projectId frmo the initalState, because this hook gets called in the AddTask Component.
      const newTask = await axios.post("/api/tasks", form);
      // we dont actually need to have the axios get added to a variable because we dont use it.
      // if you ever do this, you can also just do :
      //  await axios.post(...) this way the function still gets called but not assigned anywhere. the same thing has having .then(()) no variable there.

      setForm(initialState);
      getData();
      hideForm();
    } catch (e) {
      console.log("e:", e);
    }
  }

  return { title, description, handleChange, addProject, addTask, form };
}
