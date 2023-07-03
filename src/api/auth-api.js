import BaseApi from './api-config';

function AuthApi() {
	const endpoint = '/auth';
	// eslint-disable-next-line no-unused-vars
	const [axiosInstance] = BaseApi();

	return {
		logout: () => localStorage.removeItem('user'),

		register: async (userName, email, password) =>
			axiosInstance.post(`${endpoint}/register`, { userName, email, password }),
		getCurrentUser: () => JSON.parse(localStorage.getItem('user')),
	};
}

export default AuthApi;
