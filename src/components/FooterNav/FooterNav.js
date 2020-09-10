import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './FooterNav.css';

function FooterNav() {
	return (
		<div className='footer-nav'>
			<Link to='/'>[Incidents]</Link>
			<Link to='/incidents/new'>
				<div className='addButton'>[+]</div>
			</Link>
			<Link to='/profile'>[Profile]</Link>
		</div>
	);
}

export default FooterNav;
