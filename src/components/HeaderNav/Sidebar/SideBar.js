import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './SideBar.css';

function SideBar() {
	return (
		<div id='outer-container'>
			<Menu
				pageWarpId={'page-wrap'}
				outerContainerId={'outer-container'}
				width={'100%'}>
				<main id='page-wrap'>
					<a href='/incidents/new'>New Incident</a>
					<a href='/profile'>Profile</a>
					<a href='/about'>About</a>
					{/* <a href='/search'>Search</a> */}
					<div>
						<button className='logout-button'>Logout</button>
					</div>
				</main>
			</Menu>
		</div>
	);
}

export default SideBar;
