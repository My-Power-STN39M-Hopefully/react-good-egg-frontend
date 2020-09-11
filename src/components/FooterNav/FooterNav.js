import React from 'react';
import { Route, Link, Redirect, NavLink } from 'react-router-dom';
import './FooterNav.css';
import { PlusSquare, Person, HouseDoor, House } from 'react-bootstrap-icons';

function FooterNav() {
	return (
		<div className='footer-nav'>
			<NavLink to='/' exact activeClassName='footer-selected'>
				<HouseDoor className='bottom-nav-buttons' size='30' />
			</NavLink>
			<NavLink to='/incidents/new' activeClassName='footer-selected'>
				<PlusSquare className='bottom-nav-buttons' size='30' />
			</NavLink>

			<NavLink to='/profile' activeClassName='footer-selected'>
				<Person className='bottom-nav-buttons' size='30' />
			</NavLink>
		</div>
	);
}

export default FooterNav;
