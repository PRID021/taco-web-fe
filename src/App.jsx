import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
} from 'react-router-dom';
import React from 'react';
import CommonLayout from './components/layout/CommonLayout';
import { AppProvider } from './AppContext';
import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<AppProvider>
				<CommonLayout />
			</AppProvider>
		),
		children: [
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'about',
				element: (
					<>
						<div>About</div>
						<Link to="1">About</Link>
						<Outlet />
					</>
				),
				children: [
					{
						path: '1',
						element: <div>About asdasdasdasd</div>,
					},
					{
						path: '2',
						element: <div>About2</div>,
					},
				],
			},
			{
				path: 'contact',
				element: <div>Contact</div>,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
