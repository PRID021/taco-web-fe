import Ripple from '../effect/Ripple.js';
import { AppContext } from '../../AppContext';
import { useContext,useState } from 'react';
import RoundedButton from '../common_button/RoundedButton';

function LoginButton() {
	const { showOverlay, setShowOverlay, contentOverlay, setContentOverlay } =
		useContext(AppContext);
	const handleLoginClick = () => {
		setContentOverlay(<LoginForṃ />);
		setShowOverlay(true);
	};
	return (
		<div
			className="flex flex-col justify-center  h-fit relative
		cursor-pointer outline-none focus:outline-none overflow-hidden
		 transition-colors duration-300
		bg-secondary px-4 py-2 rounded-md  overflow-hidden outline-none"
			onClick={handleLoginClick}
		>
			Login
			<Ripple />
		</div>
	);
}
export default LoginButton;

function LoginForṃ() {
	const { setShowOverlay, setContentOverlay } = useContext(AppContext);

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const handleCloseForm = ( iUserName, iPassword ) => {
		const user = { iUserName, iPassword };
		const id = setInterval(()=>{
			console.log(`waiting for 1s with user: ${user.iUserName} and password: ${user.iPassword}`);
			clearInterval(id);
		}, 1000);
		setContentOverlay(null);
		setShowOverlay(false);
	};
	return (
		<div>
			<div class="flex flex-col gap-2 bg-green py-2">
				<label class="text-gray-500" for="username">
					Username
				</label>
				<input
					type="text"
					placeholder="Username"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					class="mx-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
				/>
				<label class="text-gray-500" for="password">
					Password
				</label>
				<input
					value={password}
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					class="mx-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
				/>
			</div>
			<RoundedButton
				title="Submit"
				onClick={() => {
					handleCloseForm( userName, password );
				}}
			/>
		</div>
	);
}
