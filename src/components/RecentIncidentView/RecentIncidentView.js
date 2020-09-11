import { Route, Link, Redirect } from 'react-router-dom';
import React from 'react';
import './RecentIncidentView.css';

function RecentIncidentView(props) {
	return (
		<Link to={'incidents/' + props.id}>
			<div className='incidentSmall'>
				{props.bad_apple === true ? (
					<div className='badApple'>Bad Apple</div>
				) : (
					<div className='goodEgg'>Good Egg</div>
				)}
				<h3>{props.category}</h3>
				<p className='date'> {props.date}</p>
				<p>{props.description}</p>
				<p>Officer/s Involved: {props.officers}</p>
			</div>
		</Link>
	);
}

export default RecentIncidentView;
