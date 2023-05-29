import React, { useState, useContext } from 'react';
import '../../app.css';
import RoundedButton from '../common_button/RoundedButton';
import { AppContext } from '../../AppContext';

function LoginForm() {
	const { setShowOverlay, setContentOverlay } = useContext(AppContext);

	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const handleCloseForm = (iUserName, iPassword) => {
		// const user = { iUserName, iPassword };
		const id = setInterval(() => {
			// console.log(
			// 	`waiting for 1s with user: ${user.iUserName} and password: ${user.iPassword}`
			// );
			clearInterval(id);
		}, 1000);
		setContentOverlay(null);
		setShowOverlay(false);
	};
	return (
		<div className="p-16 w-screen h-screen">
			<div className="bg-green h-full  mx-auto relative large:bg-signIn object-cover bg-no-repeat bg-cover  ">
				<div
					className=" bg-gradient-to-br from-gray80 to-gray10  right-0 absolute
			p-10 border rounded-3xl   flex flex-col gap-4 shadow-lg m-14"
				>
					<h2 className="text-4xl underline underline-offset-h2 font-h2 mb-2">
						Login
					</h2>
					<p className="text-2xl mb-6"> Welcome onboard with us!</p>
					<label htmlFor="userField">
						Username
						<input
							id="userField"
							type="text"
							placeholder="Enter your username"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							className="w-full  mt-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
						/>
					</label>
					<label htmlFor="userPassword">
						Username
						<input
							id="userPassword"
							type="password"
							placeholder="Enter your password"
							value={userPassword}
							onChange={(e) => setUserPassword(e.target.value)}
							className="w-full mt-2 px-4 py-2 text-gray-700  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
						/>
					</label>
					<a href="#top" className="hover:text-sky-700 self-end text-sm">
						{' '}
						Forgot Password?
					</a>
					<RoundedButton
						title="Submit"
						onClick={() => {
							handleCloseForm(userName, userPassword);
						}}
					/>

					<p className="self-center text-sm">
						New to Logo?{'  '}
						<a href="#top" className="hover:text-sky-700 ">
							Register Now
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
