import "./dashboard-checklist.css";
import React, { useState } from 'react';

export const DashboardChecklist = () => {

	const [newActivity, setNewActivity] = useState();

	function handleSubmit(e){
		
	}

	return (
	<div id="checklist">
		<table>
		<thead>
			<tr>
			<th>Status</th>
			<th>Activity</th>
			<th>Remove</th>
			</tr>
		</thead>
		<tbody id="checklistContent">	
		</tbody>
		<tfoot>
		<tr>
			<td></td>
			<td><input placeholder="Add new activity..." type="text" onChange={e => setNewActivity(e.target.value)}></input></td>
			<td><button onClick={handleSubmit}>Add</button></td>
		</tr>
		</tfoot>
		</table>
	</div>

	)	
}
