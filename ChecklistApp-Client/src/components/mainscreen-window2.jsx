import React from 'react';
import "../../src/App.css";
import { MainScreenModal } from "../../src/components/mainmodalbox.jsx";
import { MainScreenVideo } from '../../src/components/mainscreen-video';

export const MainScreenWindow2 = () => {

	const  [showModal, setShowModal] = React.useState(false);

	return(
	<div>
		<div onClick={() => setShowModal(true)}>
		<MainScreenVideo />
		</div>

		<MainScreenModal show={showModal} onHide= {() =>  setShowModal(false)} />
	</div>
	)


}
