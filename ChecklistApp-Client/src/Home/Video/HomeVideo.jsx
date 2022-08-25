import React from 'react';
import "../../src/Home/home-video.css";


export const HomeVideo = ({openModal}) => {

	
	return (
		<div className='video-container' onClick={openModal}>
		<video id="videoPlayer" autoPlay muted loop>
			<source src='../../src/assets/4K_227 (1).mp4'>
			</source>
		</video>
			<div id="videoText">
				<h1>Click here to enter</h1>
			</div>
		</div>
	)
}
