import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../app.css';
import OAuth2Api from '../api/oauth2-api';
import { AppContext } from '../AppContext';
import AppLoading from '../components/loading/AppLoading';

function Auth() {
	const [searchParams] = useSearchParams();
	const { setShowOverlay, setContentOverlay, setUserDetails } =
		React.useContext(AppContext);
	const navigate = useNavigate();

	useEffect(() => {
		setContentOverlay(<AppLoading />);
		setShowOverlay(true);
		OAuth2Api()
			.exchangeCode(searchParams.get('code'))
			.then((success) => {
				// console.log('success', success);
				if (success) {
					OAuth2Api()
						.getUserInfo()
						.then((userDetails) => {
							// console.log('success', success);
							if (userDetails) {
								setShowOverlay(false);
								setUserDetails(userDetails);
								localStorage.setItem(
									'userDetails',
									JSON.stringify(userDetails)
								);

								navigate('/');
							}
							setContentOverlay("User details couldn't be fetched");
						});
				}
			});
	}, [
		navigate,
		searchParams,
		setContentOverlay,
		setShowOverlay,
		setUserDetails,
	]);
	return <> </>;
}

export default Auth;
