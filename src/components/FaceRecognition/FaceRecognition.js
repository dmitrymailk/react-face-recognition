import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
	return(
		<div className='center ma'>
			<div className='mt2 pos-rel'>
			<img id='inputimage' src={imageUrl} alt='' style={{maxWidth: '500px', height: 'auto', width: 'auto'}} />
			<div className='bounting-box' 
			style={{top: box.topRow, bottom: box.bottomRow, right: box.rigthCol, left: box.leftCol }}></div>
		</div>
		</div>
	);
};

export default FaceRecognition;