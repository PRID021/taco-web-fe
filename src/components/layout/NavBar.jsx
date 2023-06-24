import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import LoginButton from '../login_button/LoginButton';
import SwitchButton from '../common_button/SwitchButton';
import useWindowListener from '../../hooks/useWindowListener';

const small =
	'bg-primary-half h-10 flex  items-center z-10 backdrop-filter backdrop-blur-sm sticky  top-0 left-0 right-0 px-10 border-b-0 border-husky duration-500';
const big =
	'bg-primary-half h-20 flex justify-between items-center z-10 backdrop-filter backdrop-blur-sm sticky  top-0 left-0 right-0 px-10 border-b-0 border-husky duration-500';

function NavBar() {
	const [navStyle, setNavStyle] = useState(big);
	useWindowListener('scroll', () => {
		if (window.scrollY === 0) {
			setNavStyle(big);
		} else {
			setNavStyle(small);
		}
	});

	const showButton = navStyle === big;
	return (
		<div className={navStyle}>
			<ul className="flex  gap-4 ">
				<li className="hover:text-highlight">
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link className="hover:text-highlight" to="/about">
						About
					</Link>
				</li>
				<li>
					<Link className="hover:text-highlight" to="/contact">
						Contact
					</Link>
				</li>
			</ul>
			{showButton && (
				<div className="flex flex-row-reverse gap-4 ">
					<LoginButton />
					<SwitchButton />
				</div>
			)}
		</div>
	);
}

export default NavBar;
