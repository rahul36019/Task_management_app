import "./index.css";
// import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import TaskListNumber from "./components/Other/TaskListNumber";
import TaskList from "./components/Other/TaskList";

export default function App() {
  return (
    <>
      <EmployeeDashboard />
      <TaskListNumber />
      <TaskList />
    </>
  );
}
