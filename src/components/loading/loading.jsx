import React from 'react';
import './loading.css';
import '../../app.css';
import loadingIllus from '../../assets/login_in_progress.svg';

function Loading() {
	return (
		<div className="flex flex-col justify-center items-center">
			<img src={loadingIllus} alt="loading" />
			<div className="loadingContainer">
				<div className="ball1" />
				<div className="ball2" />
				<div className="ball3" />
				<div className="ball4" />
			</div>
		</div>
	);
}
export default Loading;
