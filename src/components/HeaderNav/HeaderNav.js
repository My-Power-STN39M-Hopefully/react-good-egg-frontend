import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar/SideBar';
import './HeaderNav.css';

class HeaderNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prevScroll: window.pageYOffset,
			visible: true,
			showClass: 'show-nav',
			link: '/sign-in',
		};
	}

	handleScroll = () => {
		const { prevScroll } = this.state;
		const currentScrollPos = window.pageYOffset;
		const visible = prevScroll > currentScrollPos;

		this.setState({
			prevScroll: currentScrollPos,
			visible,
		});
	};
	componentDidMount() {
		window.scrollTo(0, 0);
		window.addEventListener('scroll', this.handleScroll);
		this.state.visible === true
			? this.setState({ showClass: 'header' })
			: this.setState({ showClass: 'hide-nav' });
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render() {
		return (
			<div>
				{this.state.visible && (
					<div className='header'>
						<main className='header-nav'>
							<SideBar
								className='side-bar'
								userEmail={this.props.userEmail}
								loginMessage={this.props.loginMessage}
								link={this.state.link}
							/>
							<Link to={'/'} className='title'>
								GoodEgg
							</Link>
							<Link to={this.state.link}>
								<button type='submit' className='sign-in'>
									{this.props.userEmail}
								</button>
							</Link>
						</main>
					</div>
				)}
				{!this.state.visible && (
					<div className='hide-nav'>
						<main className='header-nav'>
							<SideBar className='side-bar' />
							<h1 className='title'>GoodEgg</h1>
							<div className='nav-buttons'>
								<Link to='/sign-in' className='sign-in'>
									{this.props.userEmail}
								</Link>
							</div>
						</main>
					</div>
				)}
			</div>
		);
	}
}

export default HeaderNav;
