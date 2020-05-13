import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import TaskDetails from "./components/TaskDetails";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App2(props) {
  // state : {
  //   user: this.props.user,
  //   count:{ count1:1, count2:2}
  // }
  const [user, setUser] = useState(props.user);
  // const [count, setCount] = useState({ count1: 1, count2: 15 });

  // function increment() {
  //   setCount({
  //     ...count,
  //     count1: count.count1 + 1,
  //   });
  // }

  return (
    <div className="App">
      {/* <div>
        <h1>Count1 : {count.count1}</h1>
        <button onClick={increment}>Incremenet count</button>
      </div>
      <div>
        <h1>Count2 : {count.count2}</h1>
        <button>Incremenet count</button>
      </div> */}

      <Navbar user={user} setUser={setUser} />
      <ProtectedRoute exact path="/projects" user={user} component={Projects} />
      <Route
        exact
        path="/projects/:id"
        render={(props) => <ProjectDetails {...props} user={user} />}
      />
      {/* <Route
        exact
        path="/projects/:id"
        render={(props) => <ProjectDetails {...props} user={user} />}
      /> */}
      {/* <Route exact path="/tasks/:id" component={TaskDetails} /> */}
      <Route exact path="/tasks/:id" component={TaskDetails} />
      <Route
        exact
        path="/signup"
        render={(props) => <Signup setUser={setUser} {...props} />}
      />
      <Route
        exact
        path="/login"
        render={(props) => <Login setUser={setUser} {...props} />}
      />
    </div>
  );
}

// class App extends Component {
//   state = {
//     user: this.props.user,
//   };

//   setUser = (user) => {
//     this.setState({
//       user: user,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Navbar user={this.state.user} setUser={this.setUser} />

//         <Route exact path="/projects" component={Projects} />
//         {/* this route is now protected */}
//         {/* <Route
//           exact
//           path="/projects"
//           render={(props) => {
//             if (this.state.user) return <Projects {...props} />;
//             else return <Redirect to="/" />;
//           }}
//         /> */}
//         {/* <ProtectedRoute
//           exact
//           path="/projects"
//           // additional='some additional prop'
//           user={this.state.user}
//           component={Projects}
//         /> */}
//         {/* <Route exact path="/projects/:id" component={ProjectDetails} /> */}
//         <Route
//           exact
//           path="/project/:id"
//           render={(props) => (
//             <ProjectDetails {...props} user={this.state.user} />
//           )}
//         />
//         <Route exact path="/tasks/:id" component={TaskDetails} />
//         <Route
//           exact
//           path="/signup"
//           render={(props) => <Signup setUser={this.setUser} {...props} />}
//         />
//         <Route
//           exact
//           path="/login"
//           render={(props) => <Login setUser={this.setUser} {...props} />}
//         />
//       </div>
//     );
//   }
// }

export default App2;
