import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import React from 'react';
import CommonLayout from './components/layout/CommonLayout';
import { AppProvider } from './AppContext';
import Home from './pages/Home';
import Auth from './pages/Auth';

const router = createBrowserRouter([
	{
		path: '/',
		element: <CommonLayout />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'about',
				children: [
					{
						index: true,
						element: <Link to="1">About</Link>,
					},
					{
						path: '1',
						element: <div>Child 1 asdasdasdasd</div>,
					},
					{
						path: '2',
						element: <div>Child 2</div>,
					},
				],
			},
			{
				path: 'contact',
				element: <div>Contact</div>,
			},
			{
				path: 'login/oauth2',
				element: <Auth />,
			},
		],
	},
]);

function App() {
	return (
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	);
}

export default App;
