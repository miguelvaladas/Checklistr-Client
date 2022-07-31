import "../../src/App.css";
import React from 'react';
import { MainScreenModal } from "../../src/components/mainmodalbox.jsx";

export const MainscreenWindow = () => {

	const [showModal,setShowModal] = React.useState(false);

	return (

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
	  <div className="carousel-item active mainCarouselChild" onClick={() => setShowModal(true)}>
		<img src="../../src/assets/detective pikachu 111.jpg" className="d-block w-100" alt="..."></img>
		<h1 className="carouselText">CLICK TO ENTER!</h1>
    </div>
	  <div className="carousel-item mainCarouselChild" onClick={() => setShowModal(true)}>
		<img src="../../src/assets/detective pikachu 222.jpg" className="d-block w-100" alt="..."></img>
		<h1 className="carouselText">CLICK TO ENTER!</h1>
    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
	<MainScreenModal show={showModal} onHide={() => setShowModal(false)}/>
</div>
	)


}
