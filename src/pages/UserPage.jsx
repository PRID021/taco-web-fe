import React from 'react';
import { AppContext } from '../AppContext';

function UserPage() {
	const contextValue = React.useContext(AppContext);
	const userProvider = contextValue[1];
	const { userDetails } = userProvider;
	// console.log('on user page');
	// console.log(userDetails);

	const json = JSON.stringify(userDetails);
	return (
		<div className="flex flex-col">
			<h1>User Info</h1>
			<p>{json}</p>
		</div>
	);
}

export default UserPage;
