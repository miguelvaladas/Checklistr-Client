import React from 'react';
import "../../src/App.css";
import { MainScreenModal } from "../../src/components/mainmodalbox.jsx";
import { MainScreenVideo } from '../../src/components/mainscreen-video';
import {InfoBox} from "../../src/components/mainscreen-info";
export const MainScreen = () => {

	const [showModal, setShowModal] = React.useState(false);

	return(
	<div>
		<div onClick={() => setShowModal(true)}>
		<MainScreenVideo />
		</div>

		<InfoBox />
		
		<MainScreenModal show={showModal} onHide= {() =>  setShowModal(false)} />

		

	</div>
	)
}
