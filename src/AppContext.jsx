import React, { createContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export function AppProvider(props) {
	const [showOverlay, setShowOverlay] = useState(false);
	const [contentOverlay, setContentOverlay] = useState();
	const contextValue = useMemo(
		() => ({ showOverlay, setShowOverlay, contentOverlay, setContentOverlay }),
		[showOverlay, contentOverlay]
	);
	const { children } = props;
	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
}
