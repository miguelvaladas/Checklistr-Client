import "./Checklist.css";
import React, { useState, useEffect } from "react";

async function addActivity(input) {
  return fetch(input);
}

export const DashboardChecklist = () => {
  const [newActivity, setNewActivity] = useState();

  useEffect(() => {
    async function getUserActivities() {
      return fetch(
        `http://localhost:8080/api/activities/username=${localStorage.getItem(
          "username"
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => data.json())
        .then((results) => {
          results.map((obj) => {
            let node = document.createElement("tr");
            node.innerHTML = `
			 <td>-</td>
			 <td>${obj.description}</td>
			 <td><button>X</button></td>
		   `;
            document.getElementById("checklistContent").innerHTML = "";
            document.getElementById("checklistContent").appendChild(node);
          });
        });
    }
    getUserActivities();
  }, []);

  function handleSubmit(e) {}

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
        <tbody id="checklistContent"></tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                placeholder="Add new activity..."
                type="text"
                onChange={(e) => setNewActivity(e.target.value)}
              ></input>
            </td>
            <td>
              <button onClick={handleSubmit}>Add</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
