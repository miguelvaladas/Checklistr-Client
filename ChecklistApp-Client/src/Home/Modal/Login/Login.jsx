import "../Modal.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export async function loginUser(input) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Accept-Encoding": "gzip,deflate,br",
      "Content-Type": "application/x-www-form-urlencoded",
      Connection: "keep-alive",
      Accept: "*/*",
    },
    body: `username=${input.username}&password=${input.password}`,
  }).then((data) => data.json());
}

export const Login = ({ setShowLogin }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
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
      <h2>Login</h2>
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
        You do not have an account? Click{" "}
        <a className="clickableTag" onClick={() => setShowLogin(false)}>
          HERE
        </a>{" "}
        to sign-up.
      </p>
    </div>
  );
};
