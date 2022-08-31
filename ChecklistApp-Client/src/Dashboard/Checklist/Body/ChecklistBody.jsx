export const ActivityBody = ({ activity, activities, setActivities }) => {
  async function removeActivity() {
    const response = JSON.stringify({ id: activity.id });
    return fetch(`http://localhost:8080/api/activities`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: response,
    }).then(() => {
      let result = activities.filter(
        (element) => element.description !== activity.description
      );
      setActivities(result);
    });
  }

  return (
    <tr>
      <td>-</td>
      <td>{activity.description}</td>
      <td>
        <button
          onClick={(e) => {
            e.preventDefault();
            removeActivity();
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
};
