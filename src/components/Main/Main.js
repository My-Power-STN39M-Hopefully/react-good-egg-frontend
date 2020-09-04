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
			<ul>
				{props.incidents.map((incident) => {
					return (
						<RecentIncidentView
							description={incident.description}
							date={incident.date}
							category={incident.category}
							officers={incident.officers}
							id={incident.id}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default Main;
