import BaseApi from './api-config';

function AuthApi() {
	const endpoint = '/auth';
	// eslint-disable-next-line no-unused-vars
	const [axiosInstance, axiosConfig] = BaseApi();

	return {
		login: (userName, password) =>
			axiosInstance
				.post(`${endpoint}/login`, { userName, password })
				.then((response) => {
					if (response.data.accessToken) {
						localStorage.setItem('user', JSON.stringify(response.data));
					}
				}),
		logout: () => localStorage.removeItem('user'),

		register: (userName, email, password) =>
			axiosInstance.post(`${endpoint}/register`, { userName, email, password }),
		getCurrentUser: () => JSON.parse(localStorage.getItem('user')),
	};
}

export default AuthApi;
