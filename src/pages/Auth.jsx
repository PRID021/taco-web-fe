import React, { useEffect, useMemo } from 'react';
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
	const oauth2Api = useMemo(() => {
		OAuth2Api();
	}, []);

	useEffect(() => {
		setContentOverlay(<AppLoading />);
		setShowOverlay(true);
		oauth2Api.exchangeCode(searchParams.get('code')).then((success) => {
			if (success) {
				oauth2Api.getUserInfo().then((userDetails) => {
					if (userDetails) {
						setShowOverlay(false);
						setUserDetails(userDetails);
						localStorage.setItem('userDetails', JSON.stringify(userDetails));
						navigate('/');
					}
					setContentOverlay("User details couldn't be fetched");
				});
			}
		});
	}, [
		navigate,
		oauth2Api,
		searchParams,
		setContentOverlay,
		setShowOverlay,
		setUserDetails,
	]);
	return <> </>;
}

export default Auth;
