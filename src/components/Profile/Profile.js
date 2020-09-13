import React, { useEffect } from 'react';
import data from '../../data.json';
import { Link } from 'react-router-dom';
import './Profile.css';
import { GoodEggBackend } from '../../api/GoodEggBackend';

function Profile(props) {
	const [userData, setUserData] = useState({});
	const [userIncidents, setUserIncidents] = useState([]);
	// const [race, setRace] = useState('');
	// const [gender, setGender] = useState('');
	// const [nationality, setNationality] = useState('');
	// const [city, setCity] = useState('');
	// const [state, setState] = useState('');

	useEffect(() => {
		// props.incidentsHandler(data);
		window.scrollTo(0, 0);

		GoodEggBackend()
			.get('/user/rest-auth/user/', { withCredentials: true })
			.then((response) => {
				return setUserData(response.data);

				//Cookies.set('access_token', response.headers['Set-Cookie']);
				// sessionStorage.setItem('activeEmail', this.state.email);
				//window.location = '/';
			})
			.catch((error) => {
				console.log(error);
			});
		GoodEggBackend()
			.get(`/incident`)
			.then((response) => {
				let incidents = [];
				console.log(response.data.user);

				response.data.map((incident) => {
					if (incident.user === userData.id) {
						incidents.push(incident);
					}
				});
				setUserIncidents(incidents);
			})

			.catch((error) => {
				console.log(error);
			});
	}, [userData.id]);

	const handleEditClick = (event) => {
		props.editIncidentHandler(event.target.id);
	};
	return (
		<div className='profile'>
			<div className='user-icon'>{String(userData.first_name).charAt(0)}</div>
			<header className='user-info'>
				<div>
					<h3 className='user-name'>{`${userData.first_name} ${userData.last_name}`}</h3>
					<div className='user-details'>
						<p>{userData.nationality}</p>
						<p>{`${userData.race} ${userData.gender}`}</p>
						<p>{`${userData.city}, ${userData.state}`}</p>
						<Link to='/profile/edit'>
							<button className='edit-profile-button'>Edit Profile</button>
						</Link>
					</div>
				</div>
			</header>
			<main className='incidentList'>
				{/* placeholder until we get signUp-form and signIn-form operating with api */}
				{userIncidents.map((incident) => {
					return (
						<Link to={'incidents/' + incident.id}>
							<div className='incidentSmall'>
								{incident.bad_apple === true ? (
									<div className='badApple'>Bad Apple</div>
								) : (
									<div className='goodEgg'>Good Egg</div>
								)}
								<h3>{incident.category}</h3>
								<p className='date'>{incident.date} </p>
								<p>{incident.description}</p>
								<p>Officer/s Involved: {incident.officers}</p>
								<Link to={'incidents/' + incident.id + '/edit'}>
									<button
										className='edit-button'
										id={incident.id}
										onClick={handleEditClick}>
										Edit
									</button>
								</Link>
							</div>
						</Link>
					);
				})}
			</main>
		</div>
	);
}

export default Profile;
