import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar/SideBar';
import './HeaderNav.css';

class HeaderNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			link: '/sign-in',
		};
	}

	render() {
		return (
			<div>
				<div className='header'>
					<main className='header-nav'>
						<SideBar
							className='side-bar'
							userEmail={this.props.userEmail}
							loginMessage={this.props.loginMessage}
							link={this.state.link}
						/>
						<Link to={'/'} exact className='title'>
							GoodEggs
						</Link>
						<Link to={this.state.link}>
							<button type='submit' className='sign-in'>
								{sessionStorage.getItem('userToken')
									? this.props.userEmail
									: 'Sign-In'}
							</button>
						</Link>
					</main>
				</div>
			</div>
		);
	}
}

export default HeaderNav;
