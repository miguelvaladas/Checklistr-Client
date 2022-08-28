import React from "react";
import "../../src/App.css";
import { MainScreenModal } from "../../src/Home/Modal/Modal.jsx";
import { HomeVideo } from "../../src/Home/Video/HomeVideo.jsx";
import { InfoBox } from "../../src/Home/Info/Info.jsx";
export const MainScreen = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <HomeVideo openModal={() => setShowModal(true)} />

      <InfoBox />

      <MainScreenModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
};
