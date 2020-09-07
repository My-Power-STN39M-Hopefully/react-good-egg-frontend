import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './SideBar.css';

function SideBar() {
	return (
		<Menu>
			<a href='/incidents/new'>New Incident</a>
			<a href='/profile'>Profile</a>
			<a href='/about'>About</a>
			{/* <a href='/search'>Search</a> */}
			<div>
				<button className='logout-button'>Logout</button>
			</div>
		</Menu>
	);
}

export default SideBar;
