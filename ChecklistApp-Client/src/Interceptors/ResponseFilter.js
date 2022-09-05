const refreshAccessToken = async () => {
  return fetch("http://localhost:8080/api/refresh/token", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
    },
  })
    .then((data) => data.json())
    .then((response) => {
      if (response.access_token) {
        localStorage.setItem("access_token", response.access_token);
      }
    });
};

export const filterResponse = (data, resubmitRequest) => {
  if (
    data.error_message &&
    data.error_message.includes("The Token has expired")
  ) {
    refreshAccessToken();
    resubmitRequest();
  }

  return data;
};
