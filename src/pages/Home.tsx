import * as React from 'react';
import * as IngredientsApi from '../api/ingredient-api';
import '../app.css';

// Define the interface for the Ingredient object

interface Ingredients {
	id: string;
	name: string;
	type: string;
}

function Home() {
	React.useEffect(() => {
		async function fetchAccounts() {
			const response = await IngredientsApi.default().getAll();
			setIngredients(response.data);
		}
		fetchAccounts();
	}, []);
	const [ingredients, setIngredients] = React.useState<Ingredients[] | null>(
		null
	);

	return (
		<div className="items-center flex flex-col ">
			{ingredients?.map((ingredient) => (
				<div key={ingredient.id} className="w-1/2 my-5 p-5 border bg-red-700 rounded-lg flex flex-col">
					<div className="text-2xl font-bold">{ingredient.name}</div>
					<div className="text-xl">{ingredient.type}</div>
					<div className="text-2xl font-bold text-red-900"> {ingredient.id}</div>
				</div>
			))}
		</div>
	);
}
export default Home;
