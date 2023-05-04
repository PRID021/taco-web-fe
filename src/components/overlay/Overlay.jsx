import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import RoundedButton from '../common_button/RoundedButton';
const Overlay = (props) => {
	const { showOverlay, setShowOverlay,contentOverlay, setContentOverlay } = useContext(AppContext);
	const haveContentOverlay = contentOverlay != null;
	return (
		<div className="fixed top-0 left-0 h-screen w-screen z-50 bg-opacity-50 bg-gray-900 flex justify-center items-center">
			{!haveContentOverlay && (
				<div className="bg-white p-8 rounded-lg">
					<h2 className="text-lg text-black font-semibold mb-4">
						Action Button
					</h2>

					<form className=" text-black">
						<div>{props.children}</div>
						<RoundedButton />
					</form>
				</div>
			)}
			{haveContentOverlay && contentOverlay}
		</div>
	);
};
export default Overlay;


				{/* <button
							type="submit"
							className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
						>
							Login
						</button> */}