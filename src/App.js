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

function App() {
	const [incidents, setIncidents] = useState([]);
	const [officers, setOfficers] = useState([]);

	return (
		<div>
			<main>
				<HeaderNav />
				<Route path='/' exact component={Main} />
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
