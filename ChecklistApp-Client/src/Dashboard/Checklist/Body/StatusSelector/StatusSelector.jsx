import React, { useState, useEffect } from "react";
import { filterResponse } from "../../../../Interceptors/ResponseFilter";

export const StatusSelector = ({ activity }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue(activity.status);
  }, []);

  useEffect(() => {
    async function selectedValueHandler() {
      let message = {
        id: activity.id,
        description: activity.description,
        status: selectedValue,
      };
      return fetch("http://localhost:8080/api/activities", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(message),
      })
        .then((response) => response.json())
        .then((response) => filterResponse(response))
        .then((data) =>
          data !== undefined
            ? (activity.status = selectedValue)
            : selectedValueHandler()
        );
    }
    selectedValueHandler();
  }, [selectedValue]);

  return (
    <select
      id="status"
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      <option value="DEFAULT">🔖</option>

      <option value="RED">📕</option>
      <option value="YELLOW">📙</option>
      <option value="GREEN">📗</option>
    </select>
  );
};
