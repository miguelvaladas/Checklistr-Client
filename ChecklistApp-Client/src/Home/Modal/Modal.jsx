import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";
import React, { useState } from "react";
import { Login } from "../Modal/Login/Login.jsx";
import { Register } from "../Modal/Register/Register.jsx";

export const MainScreenModal = (props) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        {showLogin ? (
          <Login setShowLogin={setShowLogin} />
        ) : (
          <Register setShowLogin={setShowLogin} />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
