const refreshAccessToken = async () => {
  return fetch("http://localhost:8080/api/refresh/token", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
    },
  })
    .then((data) => data.json())
    .then((response) => {
      if (
        response.error_message &&
        response.error_message.includes("The Token has expired")
      ) {
        localStorage.clear();
        window.location.href = "http://localhost:5173";
      }
      if (response.access_token) {
        localStorage.setItem("access_token", response.access_token);
      }
    });
};

export const filterResponse = async (data) => {
  if (
    data.error_message &&
    data.error_message.includes("The Token has expired")
  ) {
    await refreshAccessToken();
  } else {
    return data;
  }
};
