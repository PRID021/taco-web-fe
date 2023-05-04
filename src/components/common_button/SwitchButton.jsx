import { useState } from 'react';
import { FaCog } from 'react-icons/fa';

function SwitchButton() {
	const [isOn, setIsOn] = useState(false);

	return (
		<div className="flex items-center justify-center w-12 ">
			<div
				className={`w-12 flex absolute  h-2 `}
				onClick={() => {
					setIsOn(!isOn);
					console.log(isOn, 'isOn');
				}}
			>
				<input
					type="checkbox"
					className={`toggle-checkbox ${
						!isOn ? 'left-0' : 'left-6'
					}  absolute  w-6 h-6 rounded-full self-center bg-white border-4 appearance-none cursor-pointer transition-all duration-2000 ease-in-out`}
					checked={isOn}
				/>
				<FaCog
					className={`absolute  ${
						!isOn ? 'left-0 rotate-1080' : 'left-6 rotate-0'
					} text-gray-600 absolute 
				 w-6 h-6 rounded-full self-center bg-green
				 border-4 appearance-none cursor-pointer transition-all duration-2000 ease-in-out`}
				/>
			</div>

			<label
				htmlFor="toggle"
				className="toggle-label block overflow-hidden w-12 h-3 rounded-full bg-gray-300 cursor-pointer"
			></label>
		</div>
	);
}

export default SwitchButton;
