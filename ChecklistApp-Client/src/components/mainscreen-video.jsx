import React from 'react';
import "../../src/components/mainscreen-video.css";


export const MainScreenVideo = () => {

	
	return (
		<div className='video-container'>
		<video id="videoPlayer" autoPlay muted loop>
			<source src='../../src/assets/4K_227.mp4'>
			</source>
		</video>
			<div id="videoText">
				<h1>Click here to enter</h1>
			</div>
		</div>
	)
}
