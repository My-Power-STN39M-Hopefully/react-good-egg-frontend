import RecentIncidentView from '../RecentIncidentView/RecentIncidentView';
import data from '../../data.json';
import React, { useEffect } from 'react';
import './Main.css';

function Main(props) {
	useEffect(() => {
		props.incidentsHandler(data);
		window.scrollTo(0, 0);
	});

	return (
		<div className='incidentList'>
			{props.incidents.map((incident) => {
				return (
					<RecentIncidentView
						bad_apple={incident.bad_apple}
						description={incident.description}
						date={incident.date}
						category={incident.category}
						officers={incident.officers}
						match={props.match}
						id={incident.id}
					/>
				);
			})}
		</div>
	);
}

export default Main;
