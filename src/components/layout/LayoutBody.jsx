import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../../app.css';

function LayoutBody() {
	return (
		<div className="h-full bg-orange-700">
			<Outlet />
		</div>
	);
}
export default LayoutBody;
