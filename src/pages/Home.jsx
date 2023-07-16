import * as React from 'react';
import '../app.css';
import DesignTaco from '../components/design_taco/DesignTaco.tsx';
import OrderForm from '../components/order_form/OrderForm.tsx';

function Home() {
	const [step, setStep] = React.useState(0);
	const [taco, setTaco] = React.useState(null);
	const handleNext = (createdTaco) => {
		setTaco(createdTaco);
		setStep(step + 1);
	};

	if (step === 0) {
		return <DesignTaco completeCallback={handleNext} />;
	}
	return <OrderForm taco={taco} />;
}
export default Home;
