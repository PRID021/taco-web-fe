import React, { useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import LayoutBody from './LayoutBody';
import Overlay from '../overlay/Overlay';
import { AppContext } from '../../AppContext';

function CommonLayout() {
	const { showOverlay } = useContext(AppContext);
	return (
		<div className="text-white bg-gradient-to-tr from-primary to-husky flex-col">
			<NavBar />
			<LayoutBody />
			<Footer />
			{showOverlay && <Overlay />}
		</div>
	);
}
export default CommonLayout;
