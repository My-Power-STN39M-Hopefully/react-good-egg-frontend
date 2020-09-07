import { Route, Link, Redirect } from 'react-router-dom';
import React from 'react';
import './RecentIncidentView.css';

function RecentIncidentView(props) {
	return (
		<div className='incidentSmall'>
			<Link to={'incidents/' + props.id}>
				<h3>
					{props.category} : {props.date}
				</h3>
				<p>{props.description}</p>
				<p>
					Officer/s Involved:{' '}
					<ul>
						<li>{props.officers}</li>
					</ul>
				</p>
			</Link>
		</div>
	);
}

export default RecentIncidentView;
