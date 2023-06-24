import React from 'react';
import '../../app.css';

function Footer() {
	return (
		<div className="flex flex-col items-center justify-center h-20 bg-primary text-white bottom-0 left-0 right-0 absolute">
			<p className="text-sm">© 2021 Husky</p>
			<p className="text-sm text-red-200">All rights reserved</p>
		</div>
	);
}
export default Footer;
