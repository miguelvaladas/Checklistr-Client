import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

async function loginUser(input) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Accept-Encoding": "gzip,deflate,br",
      "Content-Type": "application/x-www-form-urlencoded",
      Connection: "keep-alive",
      Accept: "*/*",
    },
    body: `username=${input.username}&password=${input.password}`,
  }).then((data) => console.log(data.json()));
}

export const MainScreenModal = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  let navigate = useNavigate();

  const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(e) {
      e.preventDefault();
      const token = await loginUser({
        username,
        password,
      });
      window.localStorage.setItem("token", token);
      navigate("../dashboard", { replace: true });
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
            <input
              className="submitButton"
              type="submit"
              value="Submit"
            ></input>
          </div>
        </form>
        <p>
          You do not have an account? Click{" "}
          <a
            onClick={() => {
              setShowLogin(false);
            }}
          >
            here
          </a>{" "}
          to sign-up.
        </p>
      </div>
    );
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>{showLogin ? <Login /> : null}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
