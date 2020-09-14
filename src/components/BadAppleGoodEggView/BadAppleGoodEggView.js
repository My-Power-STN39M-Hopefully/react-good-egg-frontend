import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoodEggBackend } from '../../api/GoodEggBackend';
import './BadAppleGoodEgg.css';

class BadAppleGoodEggView extends Component {
	constructor() {
		super();
		this.state = {
			bad_apples: undefined,
			good_eggs: undefined,
			bad_apples_selected: true,
		};
	}

	showEggs = () => {
		this.setState({ bad_apples_selected: false });
	};

	showApples = () => {
		this.setState({ bad_apples_selected: true });
	};

	componentDidMount() {
		window.scrollTo(0, 0);
		GoodEggBackend()
			.get('officer/apples-and-eggs')
			.then((response) => {
				this.setState({
					bad_apples: response.data.bad_apples,
					good_eggs: response.data.good_eggs,
				});
			})
			.catch((error) => {
				console.log('error');
			});
	}

	render() {
		return (
			<div>
				<div className='toggleBadAppleGoodEgg'>
					<div
						onClick={this.showApples}
						active={this.state.bad_apples_selected}
						class={
							this.state.bad_apples_selected ? 'badAppleOrEggSelected' : ''
						}>
						<button>Bad Apples</button>
					</div>
					<div
						onClick={this.showEggs}
						class={
							!this.state.bad_apples_selected ? 'badAppleOrEggSelected' : ''
						}>
						<button>Good Eggs</button>
					</div>
				</div>
				<div className='officerList'>
					{this.state.bad_apples &&
						this.state.bad_apples_selected &&
						this.state.bad_apples.map((officer) => {
							return (
								<div className='officerSmall'>
									<Link to={'officers/' + officer.id}>
										<h3>
											{officer.first_name} {officer.last_name}
										</h3>
										<p>DOB: {officer.dob}</p>
										<p>
											{officer.race} {officer.gender}
										</p>
										<p>Bad apple incidents: {officer.count}</p>
									</Link>
									<div className='badApple'>Bad Apple</div>
								</div>
							);
						})}

					{this.state.good_eggs &&
						!this.state.bad_apples_selected &&
						this.state.good_eggs.map((officer) => {
							return (
								<div className='officerSmall'>
									<Link to={'officers/' + officer.id}>
										<h3>
											{officer.first_name} {officer.last_name}
										</h3>
										<p>DOB: {officer.dob}</p>
										<p>
											{officer.race} {officer.gender}
										</p>
										<p>Good Egg Praises: {officer.count}</p>
									</Link>
									<div className='goodEgg'>Good Egg</div>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}
export default BadAppleGoodEggView;
