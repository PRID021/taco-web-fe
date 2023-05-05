import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../app.css';

function LayoutBody() {
	return (
		<div className="pt-20 ">
			<Outlet />
		</div>
	);
}
export default LayoutBody;
