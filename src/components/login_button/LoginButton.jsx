import React, { useContext } from 'react';
import Ripple from '../effect/Ripple';
import { AppContext } from '../../AppContext';
// import LoginForm from '../forms/LoginForm';
import userAvatar from '../../assets/user_avatar.svg';

function LoginButton() {
	const { userDetails } = useContext(AppContext);

	const handleLoginClick = () => {
		window.location.href =
			'http://localhost:9000/oauth2/authorize?client_id=taco-admin-client&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Flogin%2Foauth2&scope=writeIngredients%20deleteIngredients%20openid&response_type=code&response_mode=form_post';
	};

	let content;
	if (userDetails === null) {
		content = (
			<button
				type="button"
				className="flex flex-col justify-center  h-fit relative
						cursor-pointer outline-none focus:outline-none 
						transition-colors duration-300
						bg-secondary px-6 py-2 rounded-md  overflow-hidden"
				onClick={handleLoginClick}
			>
				Login
				<Ripple />
			</button>
		);
	}
	if (userDetails !== null) {
		const parts = userDetails.fullname.split(' ');
		const userLabel = parts[parts.length - 1];
		content = (
			<div className="flex items-center gap-2">
				<img src={userAvatar} alt="aaa" className="w-12 h-12" />
				<p className="text-sm">{` ${userLabel}`}</p>
			</div>
		);
	}

	return content;
}
export default LoginButton;
