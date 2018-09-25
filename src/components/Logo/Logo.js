import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Logo.png';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br1 shadow-2"
			 options={{ max : 55 }} style={{ height: 200, width: 200 }} >
				<div className="Tilt-inner pa3 ">
					<img alt='' style={{marginTop: '17px',}} src={brain}/> 
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;