import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './FooterNav.css';

function FooterNav() {
	return (
		<div className='footer-nav'>
			<Link to='/'>incidents</Link>
			<Link to='/incidents/new'>[+]</Link>
			<Link to='/profile'>profile</Link>
		</div>
	);
}

export default FooterNav;
