import React from 'react';
import NavBar from './NavBar';
import LayoutBody from './LayoutBody';
import Footer from './Footer';

function CommonLayout({ children }) {
	return (
		<div>
			<NavBar>This is my Header</NavBar>
			<LayoutBody>{children}</LayoutBody>
			<Footer> This is my footer</Footer>
		</div>
	);
}
export default CommonLayout;
