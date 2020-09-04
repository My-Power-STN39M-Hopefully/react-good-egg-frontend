import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Main from './components/Main/Main';
import CreateIncident from './components/CreateIncident/CreateIncident';
import FooterNav from './components/FooterNav/FooterNav';
import HeaderNav from './components/HeaderNav/HeaderNav';
import OfficerView from './components/OfficerView/OfficerView';
import OfficerDetail from './components/OfficerView/OfficeDetail';
import Profile from './components/Profile/Profile';
import EditIncident from './components/Profile/EditIncident';
import IncidentDetail from './components/RecentIncidentView/IncidentDetail';
import React, { useState, useEffect } from 'react';
import data from './data.json';

function App() {
	const [incidents, setIncidents] = useState([]);
	const [officers, setOfficers] = useState([]);

	const incidentsHandler = (incidents) => {
		setIncidents(incidents);
	};

	console.log(incidents);

	return (
		<div>
			<main>
				<HeaderNav />
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
				<Route path='/officers' component={OfficerView} />
				<Route path='/officers/:id' component={OfficerDetail} />
				<Route path='/profile' component={Profile} />
				<Route path='/incidents/:id/edit' component={EditIncident} />
				<Route path='/incidents/:id' component={IncidentDetail} />
				<FooterNav />
			</main>
		</div>
	);
}

export default App;
