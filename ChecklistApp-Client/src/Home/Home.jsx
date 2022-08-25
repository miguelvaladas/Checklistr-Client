import React from 'react';
import "../../src/App.css";
import { MainScreenModal } from "../../src/Home/mainmodalbox";
import { MainScreenVideo } from '../../src/Home/home-video';
import {InfoBox} from "../../src/Home/mainscreen-info";
export const MainScreen = () => {

	const [showModal, setShowModal] = React.useState(false);

	return(
	<div>
				
		<MainScreenVideo openModal={() => setShowModal(true)} />

		<InfoBox />
		
		<MainScreenModal show={showModal} onHide= {() =>  setShowModal(false)} />
		
	</div>
	)
}
