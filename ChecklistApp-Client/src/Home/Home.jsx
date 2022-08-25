import React from 'react';
import "../../src/App.css";
import { MainScreenModal } from "../../src/Home/Modal/Modal.jsx";
import { HomeVideo } from '../../src/Home/Video/HomeVideo.jsx';
import {InfoBox} from "../../src/Home/Info/Info.jsx";
export const MainScreen = () => {

	const [showModal, setShowModal] = React.useState(false);


	 function handleClick() {
		return fetch("http://localhost:8080/api/admin/users", {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
	}).then(data => console.log(data.json()));
}
	return(
	<div>
		<HomeVideo openModal={() => setShowModal(true)} />

		<InfoBox />

		<button onClick={handleClick}>Click me</button>
		
		<MainScreenModal show={showModal} onHide= {() =>  setShowModal(false)} />
	</div>
	)
}
