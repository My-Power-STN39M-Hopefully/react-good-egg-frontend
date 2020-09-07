import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './FooterNav.css';

function FooterNav() {
	return (
		<div className='footer-nav'>
			<a href='/incidents'>incidents</a>
			<a href='/incidents/new'>[+]</a>
			<a href='/profile'>profile</a>
		</div>
	);
}

export default FooterNav;
