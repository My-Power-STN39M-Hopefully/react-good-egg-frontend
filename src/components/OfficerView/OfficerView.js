import React, { useState, useEffect, Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import officerData from '../../officerData.json';
import './OfficerView.css';
import { GoodEggBackend } from '../../api/GoodEggBackend';

class OfficerView extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		GoodEggBackend()
			.get('officer/')
			.then((response) => {
				this.props.officersHandler(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log('error');
			});
	}

	render() {
		return (
			<div className='officerList'>
				{this.props.officers.map((officer) => {
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
								{/* will need to figure out logic for pulling corresponding incidents for each officer */}
								<p>Bad Apple Incidents: 100</p>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}
export default OfficerView;
