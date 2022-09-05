import "./Checklist.css";
import React, { useState, useEffect } from "react";
import { ActivityBody } from "./Body/ChecklistBody.jsx";
import { filterResponse } from "../../Interceptors/ResponseFilter.js";

export const DashboardChecklist = () => {
  const [newActivity, setNewActivity] = useState("");
  const [activities, setActivities] = useState([]);

  async function addActivity() {
    let message = {
      username: localStorage.getItem("username"),
      description: newActivity,
    };
    return fetch(`http://localhost:8080/api/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(message),
    })
      .then((data) => data.json())
      .then((data) => filterResponse(data))
      .then((activity) =>
        activity !== undefined
          ? setActivities([...activities, activity])
          : addActivity()
      );
  }

  const fetchActivities = async () => {
    return fetch(
      `http://localhost:8080/api/activities/username=${localStorage.getItem(
        "username"
      )}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
      .then((data) => data.json())
      .then((data) => filterResponse(data))
      .then((data) =>
        data !== undefined ? setActivities(data) : fetchActivities()
      );
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div id="checklist">
      <table id="checklistTable">
        <thead>
          <tr>
            <th className="tableHeader">Status</th>
            <th className="tableHeader">Activity</th>
            <th className="tableHeader">Remove</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <ActivityBody
              activity={activity}
              key={activity.id}
              activities={activities}
              setActivities={setActivities}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                placeholder="Add new activity..."
                type="text"
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
              ></input>
            </td>
            <td>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addActivity();
                  setNewActivity("");
                }}
                className="addButton"
              >
                +
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
