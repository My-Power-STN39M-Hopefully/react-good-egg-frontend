import RecentIncidentView from '../RecentIncidentView/RecentIncidentView';
import React, { Component } from 'react';
import './Main.css';
import { GoodEggBackend } from '../../api/GoodEggBackend';

class Main extends Component {
	constructor() {
		super();
		this.state = {};
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		GoodEggBackend()
			.get('/incident/recent')
			.then((response) => {
				this.props.incidentsHandler(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className='incidentList'>
				{this.props.incidents.map((incident) => {
					return (
						<RecentIncidentView
							bad_apple={incident.bad_apple}
							description={incident.description}
							date={incident.date}
							category={incident.category}
							officers={incident.officers}
							match={this.props.match}
							id={incident.id}
							incidents={this.props.incidents}
						/>
					);
				})}
			</div>
		);
	}
}

export default Main;
