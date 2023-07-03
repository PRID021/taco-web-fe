import React from 'react';
import './loading.css';
import '../../app.css';

export default function AppLoading() {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="loadingContainer">
				<div className="ball1" />
				<div className="ball2" />
				<div className="ball3" />
				<div className="ball4" />
			</div>
		</div>
	);
}
