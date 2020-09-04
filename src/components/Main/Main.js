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
			<RecentIncidentView />
		</div>
	);
}

export default Main;
