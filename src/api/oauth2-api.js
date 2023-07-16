import axios from 'axios';

const clientId = 'taco-admin-client';
const clientSecret = 'secret';
const authEndpoint = 'http://localhost:9000';
const resourceEndpoint = 'http://localhost:4443/api';

function OAuth2Api() {
	return {
		exchangeCode: async (code) => {
			const data = new URLSearchParams();
			data.append('grant_type', 'authorization_code');
			data.append('redirect_uri', 'http://localhost:5000/login/oauth2');
			data.append('code', code);

			return axios
				.create({
					baseURL: authEndpoint,
					timeout: 10000,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
					},
				})
				.post('/oauth2/token', data)
				.then((response) => {
					if (response.data) {
						localStorage.setItem('user_token', JSON.stringify(response.data));
						// console.log('LocalStorage :', localStorage.getItem('user_token'));
						return true;
					}
					return false;
				})
				.catch(
					(error) =>
						// console.error('Token request failed:', error);
						false
				);
		},

		getUserInfo: async () =>
			axios
				.create({
					baseURL: resourceEndpoint,
					timeout: 10000,
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${
							JSON.parse(localStorage.getItem('user_token')).access_token
						}`,
					},
				})
				.get('/users')
				.then((response) => {
					if (response.data) {
						return response.data;
					}
					return null;
				})
				.catch((error) => {
					// console.error('Get user detail failed:', error);
				}),
	};
}

export default OAuth2Api;
