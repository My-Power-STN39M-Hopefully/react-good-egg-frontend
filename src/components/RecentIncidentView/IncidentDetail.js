import { Route, Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class IncidentDetail extends Component {
	render() {
		// will be doing a fetch below to retrieve individual incident, waiting for database to go live
		let result = {};
		for (let i = 0; i < this.props.incidents.length; i++) {
			if (
				this.props.match.params.id ===
				this.props.incidents[i].user_id.toString()
			) {
				result = this.props.incidents[i];
			}
		}

		return (
			<div>
				<h2>{result.category}</h2>
				<p>Location: {result.location}</p>
				<p>Date: {result.date}</p> <p>Time: {result.time}</p>
				<p>Officer/s Involved: {result.officers}</p>
				<p>Description: {result.description}</p>
				<p>Made a formal complaint? {result.formal_complaint}</p>
			</div>
		);
	}
}

export default IncidentDetail;
