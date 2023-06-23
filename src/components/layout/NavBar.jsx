import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../../assets/logo.svg';
import LoginButton from '../login_button/LoginButton';
import SwitchButton from '../common_button/SwitchButton';

function NavBar() {
	return (
		<div
			className=" bg-primary-half h-20 flex justify-between items-center 
		 z-10 backdrop-filter backdrop-blur-sm
		 sticky  top-0 left-0 right-0 px-10 border-b-0 border-husky "
		>
			<ul className="flex justify-end items-center  gap-4 content-center  h-full">
				<li className="bg-blue ">
					<Logo />
				</li>
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
			<div className="flex flex-row-reverse gap-4">
				<LoginButton />
				<SwitchButton />
			</div>
		</div>
	);
}

export default NavBar;
