import "./Checklist.css";
import React, { useState, useEffect } from "react";
import { ActivityBody } from "./Body/ChecklistBody.jsx";

export const DashboardChecklist = () => {
  let activitiesCounter = 0;
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
      },
      body: JSON.stringify(message),
    })
      .then(() => {
        return fetch(`http://localhost:8080/api/activities/${newActivity}`, {
          method: "GET",
        });
      })
      .then((data) => data.json())
      .then((activity) => setActivities([...activities, activity]));
  }

  // running useEffect only once by passing empty array as the second arg. Similar to componenentDidMount
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
          let temporary = [];
          results.map((obj) => {
            temporary.push(obj);
          });
          setActivities(temporary);
        });
    }
    getUserActivities();
  }, []);

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
          {activities.map((activity) => {
            activitiesCounter++;
            return (
              <ActivityBody
                activity={activity}
                key={activitiesCounter}
                activities={activities}
                setActivities={setActivities}
              />
            );
          })}
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
              >
                Add
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
