import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../app.css';

function LayoutBody() {
	return (
		<div className="h-full bg-transparent">
			<Outlet />
		</div>
	);
}
export default LayoutBody;
