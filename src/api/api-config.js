import axios from 'axios';

const axiosConfig = {
	baseURL: 'http://localhost:4443/api',
	timeout: 10000,
	headers: {
		'X-Custom-Header': 'foobar',
	},
};

function BaseApi() {
	const axiosConfigBaseApi = axiosConfig || {};
	const baseAxios = axios;
	const axiosInstance = baseAxios.create(axiosConfigBaseApi);
	if (axiosInstance) {
		axiosInstance.interceptors.request.use(
			(config) => config,
			(error) => Promise.reject(error)
		);
		axiosInstance.interceptors.response.use(
			(response) => response,
			error => {
				console.log(error);
				if (error.response.status === 401) {
					window.location.href = "http://localhost:9000/oauth2/authorize?client_id=taco-admin-client&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Flogin%2Foauth2&scope=writeIngredients%20deleteIngredients%20openid&response_type=code&response_mode=form_post";
				}
				return Promise.reject(error)
			}
		);
	}

	return [axiosInstance, axiosConfigBaseApi];
}
export default BaseApi;
