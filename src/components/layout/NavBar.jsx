import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import LoginButton from '../login_button/LoginButton';
// import SwitchButton from '../common_button/SwitchButton';
import useWindowListener from '../../hooks/useWindowListener';
import '../../app.css';

const navItems = [
	{ name: 'Home', path: '/home' },
	{ name: 'About', path: '/about' },
	{ name: 'Contact', path: '/contact' },
];

function NavBar() {
	const [isSmall, setNavStyle] = useState(false);
	useWindowListener('scroll', () => {
		if (window.scrollY === 0) {
			setNavStyle(false);
		} else {
			setNavStyle(true);
		}
	});

	return (
		<div
			className={
				isSmall
					? 'bg-primary-half h-10 flex  items-center z-10 backdrop-filter backdrop-blur-sm sticky  top-0 left-0 right-0 px-10 border-b-0 border-husky duration-500'
					: 'bg-primary-half h-20 flex justify-between items-center z-10 backdrop-filter backdrop-blur-sm sticky  top-0 left-0 right-0 px-10 border-b-0 border-husky duration-500'
			}
		>
			<ul className="flex  gap-4 ">
				{navItems.map((item) => (
					<NavLink
						key={item.name}
						className={({ isActive }) => {
							if (isActive) {
								return 'text-highlight underline  underline-offset-4';
							}
							return 'hover:text-highlight';
						}}
						to={item.path}
					>
						{item.name}
					</NavLink>
				))}
			</ul>
			{!isSmall && (
				<div className="flex flex-row-reverse gap-4 ">
					<LoginButton />
					{/* <SwitchButton /> */}
				</div>
			)}
		</div>
	);
}

export default NavBar;
