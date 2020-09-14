import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './IncidentDetail.css';

class IncidentDetail extends Component {
	clickHandler = () => {
		this.props.history.goBack();
	};
	render() {
		console.log(this.props.incidents);
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
			<div>
				<div className='incidentDetail'>
					{result.bad_apple === true ? (
						<div className='badApple'>Bad Apple</div>
					) : (
						<div className='goodEgg'>Good Egg</div>
					)}
					<h2>{result.category}</h2>
					<p className='incidentLabel'>Date:</p>
					<p className='incidentResult'>{result.date}</p>
					<p className='incidentLabel'>Time: </p>
					<p className='incidentResult'>{result.time}</p>
					<p className='incidentLabel'>Location:</p>
					<p className='incidentResult'> {result.location}</p>
					{/* Officers Involved should be a link that brings us to officer details */}
					<p className='incidentLabel'>Officer/s Involved: </p>
					<ul className='incidentResult'>
						<li>{result.officers}</li>
					</ul>
					<p className='incidentLabel'>Description:</p>{' '}
					<p className='incidentResult'>{result.description}</p>
					{result.formal_complaint ? (
						<p className='incidentResult'>Made Formal Complaint</p>
					) : (
						<p className='incidentResult'>Has Not Made Formal Complaint</p>
					)}
				</div>
				<button onClick={this.clickHandler}>Go Back</button>
			</div>
		);
	}
}

export default withRouter(IncidentDetail);
