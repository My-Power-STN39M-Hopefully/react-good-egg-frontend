import { Route, Link, Redirect } from 'react-router-dom';
import React from 'react';

function RecentIncidentView(props) {
	return (
		<li>
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
		</li>
	);
}

export default RecentIncidentView;
