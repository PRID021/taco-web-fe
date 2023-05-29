import React, { useContext } from 'react';
import Ripple from '../effect/Ripple';
import { AppContext } from '../../AppContext';
import LoginForm from '../forms/LoginForm';

function LoginButton() {
	const { setShowOverlay, setContentOverlay } = useContext(AppContext);
	const handleLoginClick = () => {
		setContentOverlay(<LoginForm />);
		setShowOverlay(true);
	};
	return (
		<button
			type="button"
			className="flex flex-col justify-center  h-fit relative
		cursor-pointer outline-none focus:outline-none overflow-hidden
		 transition-colors duration-300
		bg-secondary px-6 py-2 rounded-md  overflow-hidden outline-none"
			onClick={handleLoginClick}
		>
			Login
			<Ripple />
		</button>
	);
}
export default LoginButton;
