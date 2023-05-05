import React from 'react';
import Ripple from '../effect/Ripple';

function RoundedButton({ onClick, title }) {
	return (
		<button
			type="button"
			className="flex  justify-center  h-fit relative
		cursor-pointer outline-none focus:outline-none overflow-hidden
		 transition-colors duration-300 
		bg-secondary py-2 rounded-md  overflow-hidden outline-none"
			onClick={onClick}
		>
			{title}
			<Ripple />
		</button>
	);
}
export default RoundedButton;
