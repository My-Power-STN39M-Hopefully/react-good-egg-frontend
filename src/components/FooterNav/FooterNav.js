import React from 'react';
import { NavLink } from 'react-router-dom';
import './FooterNav.css';
import { PlusSquare, Person, HouseDoor } from 'react-bootstrap-icons';

function FooterNav(props) {
	return (
		<div className='footer-nav'>
			<NavLink to='/' exact activeClassName='footer-selected'>
				<HouseDoor className='bottom-nav-buttons' size='30' />
			</NavLink>
			<NavLink to={props.createPath} activeClassName='footer-selected'>
				<PlusSquare className='bottom-nav-buttons' size='30' />
			</NavLink>

			<NavLink to={props.profilePath} activeClassName='footer-selected'>
				<Person className='bottom-nav-buttons' size='30' />
			</NavLink>
		</div>
	);
}

export default FooterNav;
