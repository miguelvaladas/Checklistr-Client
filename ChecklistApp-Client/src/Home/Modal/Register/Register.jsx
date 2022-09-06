import "../Modal.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Login/Login.jsx";

async function registerUser(input) {
  return fetch("http://localhost:8080/api/users", {
    method: "POST",
    headers: {
      "Accept-Encoding": "gzip,deflate,br",
      "Content-Type": "application/json",
      Connection: "keep-alive",
      Accept: "*/*",
    },
    body: JSON.stringify(input),
  });
}

export const Register = ({ setShowLogin }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await registerUser({ username, password });
    const token = await loginUser({
      username,
      password,
    });
    if (token.access_token && token.refresh_token) {
      console.log(token);
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("access_token", token.access_token);
      window.localStorage.setItem("refresh_token", token.refresh_token);
      navigate("../dashboard", { replace: true });
    }
  }

  return (
    <div>
      <h2>Create an account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
        </div>
        <div className="formFields">
          <input
            type="text"
            name="username"
            placeholder=" ✉️ Insert username..."
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password:</label>
        </div>

        <div className="formFields">
          <input
            type="text"
            name="password"
            placeholder=" 🔑 Insert password..."
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input className="submitButton" type="submit" value="Submit"></input>
        </div>
      </form>
      <p>
        Already have an account?{" "}
        <a className="clickableTag" onClick={() => setShowLogin(true)}>
          HERE
        </a>{" "}
        to login.
      </p>
    </div>
  );
};
