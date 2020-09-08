import React, { useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

function CreateIncident(props) {
	useEffect(() => {
		props.usersHandler();
	});
	return <div>Create Incident</div>;
}

export default CreateIncident;
