import React, { Component } from 'react';
import RecentIncidentView from '../RecentIncidentView/RecentIncidentView';
import { GoodEggBackend } from '../../api/GoodEggBackend';
import './OfficerDetail.css';

class OfficerDetail extends Component {
	constructor() {
		super();
		this.state = {
			officerDetail: {},
			officerIncidents: [],
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		GoodEggBackend()
			.get(`officer/${this.props.match.params.id}`)
			.then((response) => {
				this.setState({ officerDetail: response.data });
			})
			.catch((error) => {
				console.log('error');
			});
		GoodEggBackend()
			.get('incident/')
			.then((response) => {
				let incidents = [];
				response.data.map((incident) => {
					if (
						incident.officers.includes(parseInt(this.props.match.params.id))
					) {
						incidents.push(incident);
					}
				});
				this.setState({ officerIncidents: incidents });
			})
			.catch((error) => {
				console.log('error');
			});
	}

	render() {
		return (
			<div>
				<main className='officerDetail'>
					<h2>
						Officer: {this.state.officerDetail.first_name}{' '}
						{this.state.officerDetail.last_name}
					</h2>
					<p className='officerLabel'>DOB: </p>
					<p className='officerResult'>{this.state.officerDetail.dob}</p>
					<p className='officerLabel'>Badge Number: </p>
					<p className='officerResult'>
						{this.state.officerDetail.badge_number}
					</p>
					<p className='officerLabel'>Nationality:</p>
					<p className='officerResult'>
						{this.state.officerDetail.nationality}
					</p>
					<p className='officerLabel'>Race:</p>
					<p className='officerResult'>{this.state.officerDetail.race}</p>
					<p className='officerLabel'>Gender:</p>
					<p className='officerResult'>{this.state.officerDetail.gender}</p>
					<p className='officerLabel'>Unit:</p>
					<p className='officerResult'>{this.state.officerDetail.force}</p>

					{this.state.officerDetail.active ? (
						<p className='officerLabel'>Active Officer</p>
					) : (
						<p className='officerLabel'>Not Currently Active</p>
					)}
				</main>
				<div>
					<h2> Incidents: </h2>

					{/* This will be mapping over the date from fetch for the incidents that match the officer */}
					{this.state.officerIncidents.map((incident) => {
						return (
							<RecentIncidentView
								description={incident.description}
								date={incident.date}
								category={incident.category}
								officers={incident.officers}
								match={this.props.match}
								id={incident.id}
								bad_apple={incident.bad_apple}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default OfficerDetail;
