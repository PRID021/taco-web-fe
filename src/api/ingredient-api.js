import BaseApi from './api-config';

function IngredientsApi() {
	const endpoint = '/ingredients';
	const [axiosInstance, config] = BaseApi();
	return {
		getAll: async (callBack) =>
			axiosInstance.get(`${config.baseURL}${endpoint}`, {
				headers: config.headers,
			})
	};
}

export default IngredientsApi;
