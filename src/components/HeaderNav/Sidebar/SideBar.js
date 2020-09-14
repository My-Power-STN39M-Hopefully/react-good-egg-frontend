import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	handleMenuChange = (state) => {
		this.setState({ menuOpen: state.isOpen });
	};

	closeMenu = () => {
		this.setState({ menuOpen: false });
	};

	logoutSignInHandler = (event) => {
		if (this.props.loginMessage !== 'Sign-In') {
			sessionStorage.clear();
			window.location.reload();
		} else {
			return <Redirect to='/sign-in' />;
		}
	};
	render() {
		return (
			<div id='outer-container'>
				<Menu
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleMenuChange(state)}
					pageWrapId={'page-wrap'}
					outerContainerId={'outer-container'}
					width={'100%'}>
					<Link to='/' onClick={() => this.closeMenu()}>
						Incidents
					</Link>
					<Link to='/incident/new' onClick={() => this.closeMenu()}>
						New Incident
					</Link>
					<Link to='/officers' onClick={() => this.closeMenu()}>
						Officers
					</Link>
					<Link to='/profile' onClick={() => this.closeMenu()}>
						Profile
					</Link>
					<Link to='/about' onClick={() => this.closeMenu()}>
						About
					</Link>
					{/* <a href='/search'>Search</a> */}
					{/* <Link to={this.props.link}> */}
					<button
						className='logout-button'
						value={this.props.loginMessage}
						onClick={this.logoutSignInHandler}>
						{this.props.loginMessage}
					</button>
					{/* </Link> */}
				</Menu>
			</div>
		);
	}
}

export default SideBar;
