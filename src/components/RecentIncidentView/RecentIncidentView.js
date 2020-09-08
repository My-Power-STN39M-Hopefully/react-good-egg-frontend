import { Route, Link, Redirect } from 'react-router-dom';
import React from 'react';
import './RecentIncidentView.css';

function RecentIncidentView(props) {
	return (
		<div className='incidentSmall'>
			<Link to={'incidents/' + props.id}>
				{props.bad_apple === true ? (
					<div className='badApple'>Bad Apple</div>
				) : (
					<div className='goodEgg'>Good Egg</div>
				)}
				<h3>
					{props.category} : {props.date}
				</h3>
				<p>{props.description}</p>
				<p>Officer/s Involved: {props.officers}</p>
			</Link>
		</div>
	);
}

export default RecentIncidentView;
