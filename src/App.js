import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Main from './components/Main/Main';
import CreateIncident from './components/CreateIncident/CreateIncident';
import FooterNav from './components/FooterNav/FooterNav';
import HeaderNav from './components/HeaderNav/HeaderNav';
import OfficerView from './components/OfficerView/OfficerView';
import OfficerDetail from './components/OfficerView/OfficerDetail';
import Profile from './components/Profile/Profile';
import EditIncident from './components/Profile/EditIncident';
import IncidentDetail from './components/RecentIncidentView/IncidentDetail';
import React, { useState } from 'react';
import SignIn from './components/SignIn/SignIn';
import BadAppleGoodEggView from './components/BadAppleGoodEggView/BadAppleGoodEggView';
import SignUp from './components/SignUp/SignUp';
import EditProfile from './components/Profile/EditProfile/EditProfile';
// changed loggedInHandler at some point to work with this: sessionStorage.getItem('userToken') ? true : false;

function App(props) {
	const [incidents, setIncidents] = useState([]);
	const [officers, setOfficers] = useState([]);
	const [users, setUsers] = useState([]);
	const [editIncidentId, setEditIncident] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [userEmail, setUserEmail] = useState('');
	const [loginMessage, setLoginMessage] = useState('Sign-In');
	const [createPath, setCreatePath] = useState('/sign-in');
	const [profilePath, setProfilePath] = useState('/sign-in');

	const editIncidentHandler = (incidentId) => {
		setEditIncident(incidentId);
	};

	const incidentsHandler = (incidents) => {
		setIncidents(incidents);
	};

	const officersHandler = (officers) => {
		setOfficers(officers);
	};

	const usersHandler = (users) => {
		setUsers(users);
	};

	const loggedInHandler = () => {
		setLoggedIn(!loggedIn);
		setLoginMessage('Logout');
		setCreatePath('/incident/new');
		setProfilePath('/profile');
	};

	const userEmailHandler = (email) => {
		setUserEmail(email);
	};

	return (
		<div className='main'>
			<main>
				<HeaderNav
					userEmail={userEmail}
					loggedIn={loggedIn}
					loginMessage={loginMessage}
				/>
				{(props.location.pathname === '/' ||
					props.location.pathname === '/officers' ||
					props.location.pathname === '/incident') && (
					<div className='toggleIncidentOfficer'>
						<NavLink to={'/incident'} activeClassName='selected'>
							<button className='homeButton'> Incidents </button>
						</NavLink>
						<NavLink to={'/'} exact activeClassName='selected'>
							<button className='homeButton'>Apples</button>
						</NavLink>
						<NavLink to={'/officers'} activeClassName='selected'>
							<button className='homeButton'> Officers </button>
						</NavLink>
					</div>
				)}
				<Route
					path='/'
					exact
					render={() => {
						return <BadAppleGoodEggView />;
					}}
				/>
				<Route
					path='/incident'
					exact
					render={() => {
						return (
							<Main incidents={incidents} incidentsHandler={incidentsHandler} />
						);
					}}
				/>
				<Route path='/incident/new' component={CreateIncident} />

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

				<Route
					path='/profile'
					exact
					render={(routerProps) => {
						return (
							<Profile
								users={users}
								usersHandler={usersHandler}
								incidents={incidents}
								incidentsHandler={incidentsHandler}
								editIncidentHandler={editIncidentHandler}
								match={routerProps.match}
							/>
						);
					}}
				/>
				<Route
					path='/incident/:id/edit'
					render={(routerProps) => {
						return (
							<EditIncident
								editIncidentId={editIncidentId}
								incidents={incidents}
								match={routerProps.match}
							/>
						);
					}}
				/>

				<Route
					path='/incident/:id'
					exact
					render={(routerProps) => {
						return (
							props.location.pathname !== '/incidents/new' && (
								<IncidentDetail
									incidents={incidents}
									incidentsHandler={incidentsHandler}
									match={routerProps.match}
								/>
							)
						);
					}}
				/>
				<Route
					path='/sign-in'
					render={() => {
						return (
							<SignIn
								loggedInHandler={loggedInHandler}
								loggedIn={loggedIn}
								userEmailHandler={userEmailHandler}
							/>
						);
					}}
				/>
				<Route path='/sign-up' component={SignUp} />
				<FooterNav createPath={createPath} profilePath={profilePath} />
				<Route path='/profile/edit' component={EditProfile} />
			</main>
		</div>
	);
}

export default App;
