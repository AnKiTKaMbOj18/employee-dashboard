import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeDashboard/EmployeeList";

function App() {
  return (
    <div className="App">
      <h1>Login Form</h1>
      <Route path="/" exact component={LoginForm} />
      <Route path="/employee" exact component={EmployeeList} />
    </div>
  );
}

export default App;
