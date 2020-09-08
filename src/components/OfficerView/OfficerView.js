import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import officerData from '../../officerData.json';
import './OfficerView.css';

function OfficerView(props) {
	useEffect(() => {
		props.officersHandler(officerData);
	});

	return (
		<div className='officerList'>
			{props.officers.map((officer) => {
				return (
					<div className='officerSmall'>
						<Link to={'officers/' + officer.id}>
							<h3>
								{officer.first_name} {officer.last_name}
							</h3>
							<p>DOB: {officer.dob}</p>
							<p>
								{officer.race} {officer.gender}
							</p>
							{/* will need to figure out logic for pulling corresponding incidents for each officer */}
							<p>Bad Apple Incidents: 100</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default OfficerView;
