import { filterResponse } from "../../../Interceptors/ResponseFilter";
import { StatusSelector } from "./StatusSelector/StatusSelector.jsx";

export const ActivityBody = ({ activity, activities, setActivities }) => {
  async function removeActivity() {
    return fetch(`http://localhost:8080/api/activities`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({ id: activity.id }),
    })
      .then((data) => data.json())
      .then((data) => filterResponse(data))
      .then((data) => {
        if (data !== undefined) {
          let result = activities.filter(
            (element) => element.id !== activity.id
          );
          setActivities(result);
        } else {
          removeActivity();
        }
      });
  }

  return (
    <tr>
      <td className="tableCell">
        <StatusSelector activity={activity} />
      </td>
      <td className="tableCell">{activity.description}</td>
      <td className="tableCell">
        <button
          onClick={(e) => {
            e.preventDefault();
            removeActivity();
          }}
          className="checklistButton"
        >
          X
        </button>
      </td>
    </tr>
  );
};
