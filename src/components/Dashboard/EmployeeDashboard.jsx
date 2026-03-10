import React from "react";
import Header from "../Other/Header";
import TaskList from "../Other/TaskList";
import TaskListNumber from "../Other/TaskListNumber";

const EmployeeDashboard = () => {
  return (
    <div className="p-10">
      <Header />
      <TaskListNumber />
      <TaskList />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
