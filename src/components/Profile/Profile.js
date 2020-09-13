import React, { useEffect } from 'react';
import data from '../../data.json';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
	useEffect(() => {
		props.incidentsHandler(data);
		window.scrollTo(0, 0);
	});
	//need logic for finding incidents for particular user

	const handleEditClick = (event) => {
		props.editIncidentHandler(event.target.id);
	};

	return (
		<div className='profile'>
			<div className='user-icon'>T</div>
			<header className='user-info'>
				<div>
					<h3 className='user-name'>Tabitha</h3>
					<div className='user-details'>
						<p>American</p>
						<p>White Female</p>
						<p>Boston, MA</p>
						<Link to='/profile/edit'>
							<button className='edit-profile-button'>Edit Profile</button>
						</Link>
					</div>
				</div>
			</header>
			<main className='incidentList'>
				{/* placeholder until we get signUp-form and signIn-form operating with api */}
				{props.incidents.map((incident) => {
					return (
						<div>
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
						</div>
					);
				})}
			</main>
		</div>
	);
}

export default Profile;
