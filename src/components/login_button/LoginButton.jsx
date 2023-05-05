import React, { useContext, useState } from 'react';
import Ripple from '../effect/Ripple';
import { AppContext } from '../../AppContext';
import RoundedButton from '../common_button/RoundedButton';

function LoginButton() {
	const { setShowOverlay, setContentOverlay } = useContext(AppContext);
	const handleLoginClick = () => {
		setContentOverlay(<LOGIN_FORM />);
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

function LOGIN_FORM() {
	// const { setShowOverlay, setContentOverlay } = useContext(AppContext);

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	// const handleCloseForm = (iUserName, iPassword) => {
	// 	const user = { iUserName, iPassword };
	// 	const id = setInterval(() => {
	// 		// console.log(
	// 		// 	`waiting for 1s with user: ${user.iUserName} and password: ${user.iPassword}`
	// 		// );
	// 		clearInterval(id);
	// 	}, 1000);
	// 	setContentOverlay(null);
	// 	setShowOverlay(false);
	// };
	return (
		<div className="bg-white p-4 border rounded flex flex-col gap-4">
			<div className="flex flex-col gap-2 ">
				<label className="text-gray-500 block" htmlFor="userField">
					Username
				</label>
				<input
					id="userField"
					type="text"
					placeholder="Username"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					className=" px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
				/>

				<label className="text-gray-500 block" htmlFor="password">
					Password
				</label>
				<input
					value={password}
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					className=" px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
				/>
			</div>
			<RoundedButton
				title="Submit"
				onClick={() => {
					// handleCloseForm(userName, password);
				}}
			/>
		</div>
	);
}
