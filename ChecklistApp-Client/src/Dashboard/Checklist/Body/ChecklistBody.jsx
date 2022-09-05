import { filterResponse } from "../../../Interceptors/ResponseFilter";

export const ActivityBody = ({ activity, activities, setActivities }) => {
  async function removeActivity() {
    const response = JSON.stringify({ id: activity.id });
    return fetch(`http://localhost:8080/api/activities`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: response,
    })
      .then((data) => filterResponse(data, removeActivity))
      .then(() => {
        let result = activities.filter((element) => element.id !== activity.id);
        setActivities(result);
      });
  }

  return (
    <tr>
      <td className="tableCell">-</td>
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
