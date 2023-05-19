import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../app.css';

function LayoutBody() {
	return (
		<div className=" bg-black ">
			<Outlet />
		</div>
	);
}
export default LayoutBody;
