import * as React from 'react';
import '../../app.css';
import RoundedButton from '../common_button/RoundedButton';
import { AppContext } from '../../AppContext';
import IngredientsApi from '../../api/ingredient-api';
import TacoApi from '../../api/taco-api';
// @ts-ignore
import { IngredientType,Ingredient,Taco  } from '../../types/global.ts';

function IngredientGroup(props: {
	type: IngredientType;
	ingredients: Ingredient[];
}) {
	const { type, ingredients } = props;
	const [selectedIngredient, setSelectedIngredient] =
		React.useState<Ingredient | null>(null);

	return (
		<div className="ingredient-group">
			<h2>Choose your {type}</h2>
			<div className="ingredient-group__list">
				{ingredients.map((ingredient) => (
					<div
						className="ingredient-group__list__item flex gap-2"
						key={ingredient.id}
						onKeyDown={(e) => {}}
						onClick={(e) => {
							setSelectedIngredient(ingredient);
						}}
						role="button"
						tabIndex={0}
					>
						<input
							type="radio"
							name={type}
							readOnly
							value={JSON.stringify(ingredient)}
							checked={selectedIngredient?.id === ingredient.id}
						/>
						<label htmlFor={ingredient.id}>{ingredient.name}</label>
					</div>
				))}
			</div>
		</div>
	);
}

function DesignTaco(props: { completeCallback: (taco: Taco) => void }) {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
	const { setShowOverlay } = React.useContext(AppContext);
	const { completeCallback } = props;
	const formRef = React.useRef(null);

	React.useEffect(() => {
		IngredientsApi()
			.getAllIngredients()
			.then((response) => {
				setIngredients(response);
				// console.log('get ingredients response: ', response);
			});
	}, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const listIngredient: Ingredient[] = [];
		let tacoName = '';
		data.forEach((value, key) => {
			if (key !== 'name') {
				const ingredient = JSON.parse(value.toString()) as Ingredient;
				listIngredient.push(ingredient);
			}
			if (key === 'name') {
				tacoName = value.toString();
			}
		});

		const taco: Taco = {
			id: null,
			name: tacoName,
			ingredients: listIngredient,
		};
		const createTaco = async () => {
			setShowOverlay(true);
			await TacoApi()
				.createTaco(taco)
				.then((response) => {
					completeCallback(response);
				});
			setShowOverlay(false);
		};
		createTaco();
	};

	return (
		<div className="flex flex-col gap-8">
			<form ref={formRef} onSubmit={handleSubmit}>
				<h1>Design you taco</h1>
				<div className="grid gap-4 grid-cols-3">
					{Object.values(IngredientType).map((type) =>
						ingredients.filter((ingredient) => ingredient.type === type)
							.length > 0 ? (
							<IngredientGroup
								key={type}
								type={type}
								ingredients={ingredients.filter(
									(ingredient) => ingredient.type === type
								)}
							/>
						) : null
					)}
				</div>

				<div className="mt-4">
					<label htmlFor="name">
						Name your taco
						<input type="text" name="name" className="mx-4" />
					</label>
				</div>
			</form>
			<RoundedButton
				onClick={() => {
					formRef.current.dispatchEvent(
						new Event('submit', { cancelable: true, bubbles: true })
					);
				}}
				title="Submit"
			/>
		</div>
	);
}

export default DesignTaco;
