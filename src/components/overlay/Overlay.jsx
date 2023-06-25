import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import RoundedButton from '../common_button/RoundedButton';

function Overlay(props) {
	const { contentOverlay } = useContext(AppContext);
	const haveContentOverlay = contentOverlay != null;
	const { children } = props;
	return (
		<div className="fixed top-0 left-0 h-screen w-screen z-50 bg-opacity-50 bg-gray-900 flex justify-center items-center  backdrop-filter backdrop-blur-sm">
			{!haveContentOverlay && (
				<div className="bg-white p-8 rounded-lg">
					<h2 className="text-lg text-black font-semibold mb-4">
						Action Button
					</h2>

					<form className=" text-black">
						<div>{children}</div>
						<RoundedButton />
					</form>
				</div>
			)}
			{haveContentOverlay && contentOverlay}
		</div>
	);
}
export default Overlay;
