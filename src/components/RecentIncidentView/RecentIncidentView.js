import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import IncidentDetail from './IncidentDetail';

function RecentIncidentView(props) {
	return (
		<li>
			<Link to={'incidents/' + props.id}>
				<h3>
					{props.category} : {props.date}
				</h3>
				<p>{props.description}</p>
				<p>Officer Involved: {props.officers}</p>
			</Link>
		</li>
	);
}

export default RecentIncidentView;
