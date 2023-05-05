import React, { useContext } from 'react';
import NavBar from './NavBar';
import LayoutBody from './LayoutBody';
import Footer from './Footer';
import '../../app.css';
import Overlay from '../overlay/Overlay';
import { AppContext } from '../../AppContext';

function CommonLayout() {
	const { showOverlay } = useContext(AppContext);
	return (
		<div className="h-screen w-screen relative text-white bg-gradient-to-tr from-primary to-husky">
			<NavBar />
			<LayoutBody />
			<Footer> This is my footer</Footer>
			{showOverlay && <Overlay />}
		</div>
	);
}
export default CommonLayout;
