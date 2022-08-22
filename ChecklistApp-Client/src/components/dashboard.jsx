import "../../src/components/dashboard.css";
import "../../src/components/dashboard-checklist.jsx";
import {DashboardChecklist} from "../../src/components/dashboard-checklist.jsx";

export const Dashboard = () => {

	
	return (
		<div id="dashboard">
		<h1>Hello, there!</h1>

		<DashboardChecklist />

		</div>
	)
}
