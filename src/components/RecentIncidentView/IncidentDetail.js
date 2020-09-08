import { Route, Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import './IncidentDetail.css';

class IncidentDetail extends Component {
	render() {
		// will be doing a fetch below to retrieve individual incident, waiting for database to go live
		let result = {};
		for (let i = 0; i < this.props.incidents.length; i++) {
			if (
				this.props.match.params.id === this.props.incidents[i].id.toString()
			) {
				result = this.props.incidents[i];
			}
		}

		return (
			<div className='incidentDetail'>
				{result.bad_apple === true ? (
					<div className='badApple'>Bad Apple</div>
				) : (
					<div className='goodEgg'>Good Egg</div>
				)}
				<h2>{result.category}</h2>
				<p>Location: {result.location}</p>
				<p>Date: {result.date}</p> <p>Time: {result.time}</p>
				{/* Officers Involved should be a link that brings us to officer details */}
				<p>
					Officer/s Involved:{' '}
					<ul>
						<li>{result.officers}</li>
					</ul>
				</p>
				<p>Description: {result.description}</p>
				<p>Made a formal complaint? {result.formal_complaint}</p>
			</div>
		);
	}
}

export default IncidentDetail;
