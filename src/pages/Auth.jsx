import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../app.css';
import OAuth2Api from '../api/oauth2-api';

function Auth() {
	let [searchParams] = useSearchParams();

	console.log(searchParams.get('code'));

	useEffect(() => {
		OAuth2Api().exchangeCode(searchParams.get('code'));
	}, [1]);
	return (
		<div className="flex flex-col">
			<h1>Auth</h1>
			<p>Perform request token {searchParams.get('code')} </p>
		</div>
	);
}

export default Auth;
