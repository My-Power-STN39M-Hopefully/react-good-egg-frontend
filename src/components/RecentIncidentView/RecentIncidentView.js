import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './RecentIncidentView.css';

function RecentIncidentView(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Link to={'incidents/' + props.id} incidents={props.incidents}>
			<div className='incidentSmall'>
				{props.bad_apple === true ? (
					<div className='badApple'>Bad Apple</div>
				) : (
					<div className='goodEgg'>Good Egg</div>
				)}
				<h3 className='incidentCategory'>{props.category}</h3>
				<p className='date'> {props.date}</p>

				<p className='description'>{props.description}</p>

				<p>Officer(s) Involved: {props.officers}</p>
			</div>
		</Link>
	);
}

export default RecentIncidentView;
