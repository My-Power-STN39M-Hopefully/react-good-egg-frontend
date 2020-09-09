import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';
import { render } from '@testing-library/react';

class SideBar extends Component {
	state = {
		menuOpen: false,
	};

	handleMenuChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}

	closeMenu() {
		this.setState({ menuOpen: false });
	}
	render() {
		return (
			<div id='outer-container'>
				<Menu
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleMenuChange(state)}
					pageWrapId={'page-wrap'}
					outerContainerId={'outer-container'}
					width={'100%'}>
					<Link to='/incidents/new' onClick={() => this.closeMenu()}>
						New Incident
					</Link>
					<Link to='/profile' onClick={() => this.closeMenu()}>
						Profile
					</Link>
					<Link to='/about' onClick={() => this.closeMenu()}>
						About
					</Link>
					{/* <a href='/search'>Search</a> */}
					<div>
						<button className='logout-button'>Logout</button>
					</div>
				</Menu>
			</div>
		);
	}
}

export default SideBar;
