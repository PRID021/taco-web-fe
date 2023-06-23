import BaseApi from './api-config';

function IngredientsApi() {
	const endpoint = '/ingredients';
	const [axiosInstance, config] = BaseApi();
	return {
		getAll: () => axiosInstance.get(`${config.baseURL}${endpoint}`),
	};
}

export default IngredientsApi;
