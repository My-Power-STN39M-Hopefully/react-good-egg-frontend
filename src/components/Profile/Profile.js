import React, { useState, useEffect } from 'react';
import data from '../../data.json';
import { Route, Link, Redirect } from 'react-router-dom';
import EditIncident from './EditIncident';
import './Profile.css';

function Profile(props) {
	useEffect(() => {
		props.incidentsHandler(data);
	});
	//need logic for finding incidents for particular user

	return (
		<div className='profile'>
			<header className='user-info'>
				<h3>Name</h3>
				<ul>
					<li>Nationality</li>
					<li>Gender</li>
					<li>City, State</li>
				</ul>
				<Link to='/profile/edit'>
					<button>Edit Profile</button>
				</Link>
			</header>
			<main>
				{/* placeholder until we get signUp-form and signIn-form operating with api */}
				{props.incidents.map((incident) => {
					return (
						<div className='user-incidents'>
							<div className='incidents-small'>
								<Link to={'incidents/' + incident.id}>
									{incident.bad_apple === true ? (
										<div className='badApple'>Bad Apple</div>
									) : (
										<div className='goodEgg'>Good Egg</div>
									)}
									<h3>
										{incident.category} : {incident.date}
									</h3>
									<p>{incident.description}</p>
									<p>Officer/s Involved: {incident.officers}</p>
									<button className='edit-button'>Edit</button>
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
