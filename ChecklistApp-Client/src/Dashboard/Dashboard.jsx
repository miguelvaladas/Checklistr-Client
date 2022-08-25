import "../../src/Dashboard/dashboard.css";
import "../../src/Dashboard/Checklist/dashboard-checklist.jsx";
import {DashboardChecklist} from "../../src/Dashboard/Checklist/dashboard-checklist.jsx";

export const Dashboard = () => {

	
	return (
		<div id="dashboard">
		<h1>Hello, there!</h1>

		<DashboardChecklist />

		</div>
	)
}
