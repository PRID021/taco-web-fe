import axios from 'axios';

function IngredientsApi() {
	const ingredientsApi = axios.create({
		baseURL: 'http://localhost:4443/api/ingredients',
		timeout: 10000,
		headers: {
			Authorization: `Bearer ${
				JSON.parse(localStorage.getItem('user_token')).access_token
			}`,
		},
	});

	return {
		getAllIngredients: async () =>
			ingredientsApi.get().then((response) => {
				if (response) {
					// console.log('Ingredients :', response);
					return response.data;
				}
				return null;
			}),
	};
}

export default IngredientsApi;
