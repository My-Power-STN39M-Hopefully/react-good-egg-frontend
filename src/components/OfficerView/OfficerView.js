import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OfficerView.css';

function OfficerView(props) {
	useEffect(() => {
		const url =
			'http://ec2-18-224-153-210.us-east-2.compute.amazonaws.com:8000/officers/apples-and-eggs';
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				props.officersHandler(response.bad_apples.concat(response.good_eggs));
			})
			.catch((err) => {
				console.log(err);
			});

		window.scrollTo(0, 0);
	});

	return (
		<div className='officerList'>
			{props.officers.map((officer) => {
				return (
					<div className='officerSmall'>
						<Link to={'officers/' + officer.id}>
							<h3>
								{officer.first_name} {officer.last_name}
							</h3>
							<p>DOB: {officer.dob}</p>
							<p>
								{officer.race} {officer.gender}
							</p>
							{/* will need to figure out logic for pulling corresponding incidents for each officer */}
							<p>Bad Apple Incidents: 100</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default OfficerView;
