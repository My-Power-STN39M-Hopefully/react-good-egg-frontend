import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Main from './components/Main/Main';
import CreateIncident from './components/CreateIncident/CreateIncident';
import FooterNav from './components/FooterNav/FooterNav';
import HeaderNav from './components/HeaderNav/HeaderNav';
import OfficerView from './components/OfficerView/OfficerView';
import OfficerDetail from './components/OfficerView/OfficerDetail';
import Profile from './components/Profile/Profile';
import EditIncident from './components/Profile/EditIncident';
import IncidentDetail from './components/RecentIncidentView/IncidentDetail';
import React, { useState, useEffect } from 'react';

function App() {
	const [incidents, setIncidents] = useState([]);
	const [officers, setOfficers] = useState([]);

	const incidentsHandler = (incidents) => {
		setIncidents(incidents);
	};

	const officersHandler = (officers) => {
		setOfficers(officers);
	};

	return (
		<div>
			<main>
				<HeaderNav />
				<Link to={'/'}>
					<button> Incidents </button>
				</Link>
				<Link to={'/officers'}>
					<button> Officers </button>
				</Link>
				<Route
					path='/'
					exact
					render={() => {
						return (
							<Main incidents={incidents} incidentsHandler={incidentsHandler} />
						);
					}}
				/>
				<Route path='/incidents/new' component={CreateIncident} />

				<Route
					path='/officers'
					exact
					render={() => {
						return (
							<OfficerView
								officers={officers}
								officersHandler={officersHandler}
							/>
						);
					}}
				/>

				<Route
					path='/officers/:id'
					render={(routerProps) => {
						return (
							<OfficerDetail
								officers={officers}
								officersHandler={officersHandler}
								incidents={incidents}
								match={routerProps.match}
							/>
						);
					}}
				/>

				<Route path='/profile' component={Profile} />
				<Route path='/incidents/:id/edit' component={EditIncident} />
				<Route
					path='/incidents/:id'
					render={(routerProps) => {
						return (
							<IncidentDetail
								incidents={incidents}
								incidentsHandler={incidentsHandler}
								match={routerProps.match}
							/>
						);
					}}
				/>
				<FooterNav />
			</main>
		</div>
	);
}

export default App;
