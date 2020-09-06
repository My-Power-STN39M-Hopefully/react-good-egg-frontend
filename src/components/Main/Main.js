import { Route, Link, Redirect } from 'react-router-dom';
import RecentIncidentView from '../RecentIncidentView/RecentIncidentView';
import data from '../../data.json';
import React, { useState, useEffect } from 'react';

function Main(props) {
	useEffect(() => {
		props.incidentsHandler(data);
	});

	return (
		<div>
			{/* <Link to={'/'}>
				<h2> Incidents </h2>
			</Link>
			<Link to={'/officers'}>
				<h2> Officers </h2>
			</Link> */}

			<ul>
				{props.incidents.map((incident) => {
					return (
						<RecentIncidentView
							description={incident.description}
							date={incident.date}
							category={incident.category}
							officers={incident.officers}
							// Will put actual id of obj from database when created //
							id={incident.user_id}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default Main;
