import axios from 'axios';

const axiosConfig = {
	baseURL: 'http://localhost:8080',
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
			(error) => Promise.reject(error)
		);
	}

	return [axiosInstance, axiosConfigBaseApi];
}
export default BaseApi;
