import { useState, useEffect } from "react";
import axios from "axios";

export default function useLogic() {
  const [projects, setProjects] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    // console.log("Runs every time, no second argument");
  }, []);

  useEffect(() => {
    getProjects();
    // console.log("compoennt did mount");
    //
    return () => {
      // console.log("Umounting");
    };
  }, []);

  useEffect(() => {
    console.log("updating projects");
  }, [projects]);

  useEffect(() => {
    // console.log("Compoennt did mopunt + whenever the count state changes");
  }, [count]);

  async function getProjects() {
    return axios
      .get("/api/projects")
      .then((response) => {
        console.log("response:", response.data);
        console.log("about to update projects state");
        setProjects(response.data);

        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //
  // function increment() {
  //   setCount(count + 1);
  // }

  return {
    projects,
    // increment,
    // count,
    getProjects,
  };
}
