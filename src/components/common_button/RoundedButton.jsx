import Ripple from '../effect/Ripple.js';

function RoundedButton({children,onClick, title }) {
	return (
		<div
			className="flex flex-col justify-center  h-fit relative
		cursor-pointer outline-none focus:outline-none overflow-hidden
		 transition-colors duration-300
		bg-secondary px-4 py-2 rounded-md  overflow-hidden outline-none"
			onClick={onClick}
		>
			{title}
			{children}
			<Ripple />
		</div>
	);
}
export default RoundedButton;
