import * as React from 'react';
import RoundedButton from '../common_button/RoundedButton';
import { AppContext } from '../../AppContext';
import '../../app.css';
import OrderApi from '../../api/order-api';
// @ts-ignore
import { Taco, TacoOrder } from '../../types/global.ts';

function FormField(props: any) {
	const { id, label, type, name } = props;
	return (
		<div className="flex flex-col gap-2  m-2">
			<label
				className="bg-transparent  whitespace-nowrap overflow-hidden"
				htmlFor={id}
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				className="border-solid border-black m-2 rounded-sm w-1/2 h-10 p-2 text-stone-950"
			/>
		</div>
	);
}

function OrderForm(taco: Taco) {
	const formRef = React.useRef(null);
	const { setShowOverlay } = React.useContext(AppContext);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const tacoOrder: TacoOrder = {
			id: null,
			deliveryName: formData.get('deliveryName').toString(),
			deliveryStreet: formData.get('deliveryStreet').toString(),
			deliveryCity: formData.get('deliveryCity').toString(),
			deliveryState: formData.get('deliveryState').toString(),
			deliveryZip: formData.get('deliveryZip').toString(),
			ccNumber: formData.get('ccNumber').toString(),
			ccExpiration: formData.get('ccExpiration').toString(),
			ccCVV: formData.get('ccCVV').toString(),
			tacos: [taco],
		};

		// console.log('tacoOrder: ', JSON.stringify(tacoOrder));
		async function postTacoOrder() {
			setShowOverlay(true);
			await OrderApi()
				.createOrder(tacoOrder)
				.then((response) => {
					// console.log('postTacoOrder response: ', response);
				});
			setShowOverlay(true);
		}

		postTacoOrder();
	};

	return (
		<div className="order-wrapper min-h-screen flex flex-col justify-evenly m-8">
			<form
				ref={formRef}
				method="post"
				onSubmit={handleSubmit}
				className="grid grid-cols-3 items-start grid-flow-row place-content-around justify-start"
			>
				<FormField
					label="Deliver my taco masterpieces to..."
					id="deliveryName"
					name="deliveryName"
					type="text"
				/>
				<FormField
					label="Street address..."
					id="deliveryStreet"
					name="deliveryStreet"
					type="text"
				/>
				<FormField
					label="City"
					id="deliveryCity"
					name="deliveryCity"
					type="text"
				/>
				<FormField
					label="State"
					id="deliveryState"
					name="deliveryState"
					type="text"
				/>
				<FormField
					label="Zip code"
					id="deliveryZip"
					name="deliveryZip"
					type="text"
				/>
				<FormField
					label="Credit Card"
					id="ccNumber"
					name="ccNumber"
					type="text"
				/>
				<FormField
					label="Expiration"
					id="ccExpiration"
					name="ccExpiration"
					type="text"
				/>
				<FormField label="CVV" id="ccCVV" name="ccCVV" type="text" />
			</form>
			<div className="btn-wrapper w-1/3 flex  self-center">
				<RoundedButton
					onClick={() => {
						formRef.current.dispatchEvent(
							new Event('submit', { cancelable: true, bubbles: true })
						);
					}}
					title="Submit"
				/>
			</div>
		</div>
	);
}

export default OrderForm;
