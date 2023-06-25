import * as React from 'react';
import '../../app.css';
import validator from 'validator';
import RoundedButton from '../common_button/RoundedButton';
import { AppContext } from '../../AppContext';
import Loading from '../loading/loading';

interface FormState {
	value: string;
	error: string;
}

function LoginForm() {
	document.body.style.overflow = 'hidden';
	const { setShowOverlay, setContentOverlay } = React.useContext(AppContext);
	const childRef = React.useRef(null);
	const [showError, setShowError] = React.useState(false);
	const [userName, setUserName] = React.useState<FormState>({
		value: '',
		error: null,
	});
	const [userPassword, setUserPassword] = React.useState({
		value: '',
		error: null,
	});
	const handleSubmitForm = () => {
		let nameError = null;
		let passwordError = null;
		if (validator.isEmpty(userName.value)) {
			nameError = 'Username cannot be empty';
		}
		if (validator.isEmpty(userPassword.value)) {
			passwordError = 'Password cannot be empty';
		}
		if (nameError || passwordError) {
			setUserName({ ...userName, error: nameError });
			setUserPassword({ ...userPassword, error: passwordError });
			setShowError(true);
			return;
		}
		const id = setInterval(() => {
			clearInterval(id);
		}, 1000);
		document.body.style.overflow = '';
		setContentOverlay(<Loading />);
		// setShowOverlay(false);
	};

	const handleClick = (event: any) => {
		if (childRef.current && !childRef.current.contains(event.target)) {
			document.body.style.overflow = '';
			setShowOverlay(false);
		}
	};
	return (
		<div
			onKeyUp={handleClick}
			onClick={handleClick}
			role="button"
			tabIndex={0}
			className="p-32 w-screen h-screen flex justify-center items-center"
		>
			<div
				ref={childRef}
				className=" bg-primary absolute p-10 border rounded-3xl   flex flex-col gap-4 shadow-lg m-14"
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
						value={userName.value}
						onChange={(e) =>
							setUserName({ ...userName, value: e.target.value })
						}
						className="w-full  mt-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
					/>
					{showError && (
						<p className="text-red-700 text-sm">{userName.error}</p>
					)}
				</label>
				<label htmlFor="userPassword">
					Password
					<input
						id="userPassword"
						type="password"
						placeholder="Enter your password"
						value={userPassword.value}
						onChange={(e) =>
							setUserPassword({ ...userPassword, value: e.target.value })
						}
						className="w-full mt-2 px-4 py-2 text-gray-700  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
					/>
					{showError && (
						<p className="text-red-700 text-sm">{userPassword.error}</p>
					)}
				</label>
				<a href="#top" className="hover:text-sky-700 self-end text-sm">
					{' '}
					Forgot Password?
				</a>
				<RoundedButton
					title="Submit"
					onClick={() => {
						handleSubmitForm();
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
	);
}

export default LoginForm;
