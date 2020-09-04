import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import RecentIncidentView from '../RecentIncidentView/RecentIncidentView';

function Main() {
	return (
		<div>
			<RecentIncidentView />
		</div>
	);
}

export default Main;
