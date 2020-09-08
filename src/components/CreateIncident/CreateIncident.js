import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './CreateIncident.css';

class CreateIncident extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
		};
		this.handleChange = this.handleChange.bind(this);
		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	handleChange(date) {
		this.setState({
			startDate: date,
		});
	}

	// onFormSubmit(e) {
	// 	e.preventDefault();
	// 	console.log(this.state.startDate);
	// }

	render() {
		return (
			<div>
				<h1>Incident Form</h1>
				<Form className='incidentForm'>
					<Form.Row>
						<Form.Group as={Col} controlId='formGridState'>
							<Form.Label>Category</Form.Label>
							<Form.Control as='select' defaultValue='Category...'>
								<option>Choose...</option>
								<option>Conduct Unbecoming (Off Duty)</option>
								<option>Criminal Misconduct</option>
								<option>Domestic</option>
								<option>Lockup Procedures</option>
								<option>Operation / Personnel Violations</option>
								<option>Supervisory Responsibilities</option>
								<option>Traffic</option>
								<option>Verbal Abuse</option>
								<option>Use of Force</option>
								<option>Drug / Alcohol Abuse</option>
								<option>Bribery / Official Corruption</option>
								<option>Illegal Search</option>
								<option>OTHER</option>
							</Form.Control>
							<Form.Control type='text' placeholder='Other' />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='formGridOfficer'>
						<Form.Label>Officer</Form.Label>
						<Form.Control as='select' defaultValue='Choose...'>
							<option>Choose...</option>
							<option>John Smith</option>
							<option>Robert Jend</option>
							<option>Daniel Brooks</option>
							<option>John Martinez</option>
						</Form.Control>
						<Form.Control type='text' placeholder='Description of Officer' />
					</Form.Group>

					<Form.Group controlId='formGridIncidentDescription'>
						<Form.Label>Incident Description</Form.Label>
						<Form.Control as='textarea' rows='3' />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId='formGridDate'>
							<Form.Label>Date</Form.Label>
							<Form.Control type='date' />
						</Form.Group>

						<Form.Group as={Col} controlId='formGridTime'>
							<Form.Label>Time</Form.Label>
							<Form.Control type='time' />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='formGridLocation'>
						<Form.Label>Location</Form.Label>
						<Form.Control type='textarea' placeholder='Location of Incident' />
					</Form.Group>

					<Form.Group controlId='formGridFiledReport'>
						<Form.Check
							type='checkbox'
							label='I filed a formal police complaint'
						/>
						<Form.Group>
							<Form.Control placeholder='Formal Complaint Number' />
						</Form.Group>
					</Form.Group>

					<Form.Group controlId='formGridWitnesses'>
						<Form.Check type='checkbox' label='There were witnesses' />
						<Form.Group>
							<Form.Control
								as='textarea'
								rows='3'
								placeholder='Witness Information'
							/>
						</Form.Group>
					</Form.Group>

					<button>Submit</button>
				</Form>
			</div>
		);
	}
}
export default CreateIncident;
