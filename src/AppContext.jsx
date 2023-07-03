import React, { createContext, useState, useMemo, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider(props) {
	const [showOverlay, setShowOverlay] = useState(false);
	const [contentOverlay, setContentOverlay] = useState();
	const [userDetails, setUserDetails] = useState(null);
	const contextValue = useMemo(
		() => ({
			showOverlay,
			setShowOverlay,
			contentOverlay,
			setContentOverlay,
			userDetails,
			setUserDetails,
		}),
		[
			showOverlay,
			setShowOverlay,
			contentOverlay,
			setContentOverlay,
			userDetails,
			setUserDetails,
		]
	);

	const { children } = props;

	useEffect(() => {
		const localUserDetails = localStorage.getItem('userDetails');

		if (typeof localUserDetails === 'undefined' || localUserDetails === null) {
			return;
		}

		try {
			const parsedUserDetails = JSON.parse(localUserDetails);
			// console.log(parsedUserDetails);
			setUserDetails(parsedUserDetails);
		} catch (error) {
			// console.error('Error parsing userDetails:', error);
		}
	}, []);
	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
}
