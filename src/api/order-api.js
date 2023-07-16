import axios from 'axios';

async function createOrder(order) {
	const axiosConfig = {
		baseURL: 'http://localhost:4443/api/orders',
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${
				JSON.parse(localStorage.getItem('user_token')).access_token
			}`,
		},
	};

	return axios.post('', order, axiosConfig).then((response) => {
		if (response.status === 200 || response.status === 201) {
			return response.data;
		}
		// console.log(response);
		return null;
	});
}

function OrderApi() {
	return {
		createOrder,
	};
}

export default OrderApi;
