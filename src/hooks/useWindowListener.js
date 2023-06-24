import { useEffect } from 'react';

function useWindowListener(eventType, listener) {
	useEffect(() => {
		window.addEventListener(eventType, listener);
		return () => {
			window.removeEventListener(eventType, listener);
		};
	}, [eventType, listener]);
}
export default useWindowListener;
