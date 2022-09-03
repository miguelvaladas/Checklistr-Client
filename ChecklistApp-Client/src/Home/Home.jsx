import React from "react";
import "../../src/App.css";
import { MainScreenModal } from "../../src/Home/Modal/Modal.jsx";
import { HomeVideo } from "../../src/Home/Video/HomeVideo.jsx";
import { InfoBox } from "../../src/Home/Info/Info.jsx";
import { useNavigate } from "react-router-dom";

export const MainScreen = () => {
  const [showModal, setShowModal] = React.useState(false);

  let navigate = useNavigate();

  return (
    <div>
      <HomeVideo
        openModal={() => {
          localStorage.length === 0
            ? setShowModal(true)
            : navigate("/dashboard");
        }}
      />

      <InfoBox />

      <MainScreenModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
};
