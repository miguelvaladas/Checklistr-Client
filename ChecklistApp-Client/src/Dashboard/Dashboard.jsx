import "./Dashboard.css";
import { DashboardChecklist } from "../../src/Dashboard/Checklist/Checklist.jsx";

export const Dashboard = () => {
  return (
    <div id="dashboard">
      <div className="greetingContainer">
        <h1 className="greeting">Hello, {localStorage.getItem("username")}!</h1>
      </div>
      <DashboardChecklist />
    </div>
  );
};
