import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../app.css';

function Auth() {
	let [searchParams] = useSearchParams();

	console.log(searchParams.get('code'));
	return (
		<div className="flex flex-col">
			<h1>Auth</h1>
			<p>Perform request token {searchParams.get('code')} </p>
		</div>
	);
}

export default Auth;
