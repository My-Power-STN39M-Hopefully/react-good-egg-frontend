import RecentIncidentView from '../RecentIncidentView/RecentIncidentView';
import data from '../../data.json';
import React, { useEffect, Component } from 'react';
elopment
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
			.get('/incident/')
			.then((response) => {
				this.props.incidentsHandler(response.data);
				//Cookies.set('access_token', response.headers['Set-Cookie']);
				// sessionStorage.setItem('activeEmail', this.state.email);
				//window.location = '/';
				console.log(response.data);
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
