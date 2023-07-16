import axios from 'axios';

async function createTaco(taco) {
	const axiosConfig = {
		baseURL: 'http://localhost:4443/api/tacos',
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${
				JSON.parse(localStorage.getItem('user_token')).access_token
			}`,
		},
	};
	return axios.post('', taco, axiosConfig).then((response) => {
		if (response.status === 200 || response.status === 201) {
			return response.data;
		}
		return null;
	});
}

function TacoApi() {
	return {
		createTaco,
	};
}

export default TacoApi;
