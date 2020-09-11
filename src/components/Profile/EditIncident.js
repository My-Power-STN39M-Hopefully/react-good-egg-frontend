import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './EditIncident.css';

class EditIncident extends Component {
	constructor() {
		super();
		this.state = {
			editedIncident: {},
		};
	}

	setEditIncident = (incident) => {
		this.setState({ editedIncident: incident });
	};

	handleInputChange = (event) => {
		const editIncident = this.state.editIncident;
		this.setEditIncident({
			category: editIncident.category,
			officers: editIncident.officers,
			officer_description: editIncident.officer_description,
			description: editIncident.description,
			date: editIncident.date,
			time: editIncident.time,
			location: editIncident.location,
			formal_complaint: editIncident.formal_complaint,
			formal_complaint_number: editIncident.formal_complaint_number,
			witnesses_present: editIncident.witnesses_present,
			witnesses_information: editIncident.witnesses_information,
			private: editIncident.private,
			...{ [event.target.id]: event.target.value },
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const newIncident = this.state.editedIncident;
		const url = `/incidents/edit/${newIncident.id}`;
		// newIncident will be the updated object we sent in the PUT request.
		//url endpoint may have to be adjusted to match backend.
		//we can run put request and then redirect to profile.
	};

	deleteIncident = (event) => {
		event.preventDefault();
		const newIncident = this.state.editedIncident;
		const url = `/incidents/${newIncident.id}`;
	};

	render() {
		let result = {};
		// will be doing a fetch below to retrieve individual incident, waiting for database to go live
		// this will likely load on didmount to update editedIncident in state
		for (let i = 0; i < this.props.incidents.length; i++) {
			if (this.props.editIncidentId === this.props.incidents[i].id.toString()) {
				result = this.props.incidents[i];
			}
		}

		return (
			<div className='create-form'>
				<h1>Edit Incident Form</h1>
				<Form className='incidentForm' onSubmit={this.handleSubmit}>
					<Form.Group controlId='category'>
						<Form.Label>Category</Form.Label>
						<Form.Control
							as='select'
							defaultValue={result.category}
							// defaultValue={result.category}
							onChange={this.handleInputChange}>
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
							<option>Praise</option>
							<option>OTHER</option>
						</Form.Control>
					</Form.Group>
					{result.category === 'OTHER' && (
						<Form.Group controlId='category_description'>
							<Form.Control
								type='text'
								defaultValue={result.category_description}
								// placeholder='Please Enter New Category'
								onChange={this.handleInputChange}></Form.Control>
						</Form.Group>
					)}

					<Form.Group controlId='officers'>
						<Form.Label>Officer</Form.Label>
						<Form.Control
							as='select'
							defaultValue={result.officers}
							onChange={this.handleInputChange}>
							<option>Choose...</option>
							<option>Unknown</option>
							<option>John Smith</option>
							<option>Robert Jend</option>
							<option>Daniel Brooks</option>
							<option>John Martinez</option>
							<option>Jerome Turbyville</option>
							<option>Kevin Osborn</option>
							<option>Paul Kusinski</option>
							<option>Sandra Jenique</option>
							<option>John Rodgers</option>
						</Form.Control>
					</Form.Group>

					{result.officers === 'Unknown' && (
						<Form.Group controlId='officer_description'>
							<Form.Control
								type='text'
								defaultValue={result.officers_description}
								placeholder='Please Enter Description of Officer'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					)}

					<Form.Group controlId='description'>
						<Form.Label>Incident Description</Form.Label>
						<Form.Control
							as='textarea'
							rows='3'
							defaultValue={result.description}
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId='date'>
							<Form.Label>Date</Form.Label>
							<Form.Control
								type='date'
								defaultValue={result.date}
								onChange={this.handleInputChange}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId='time'>
							<Form.Label>Time</Form.Label>
							<Form.Control
								type='time'
								defaultValue={result.time}
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='location'>
						<Form.Label>Location</Form.Label>
						<Form.Control
							type='textarea'
							defaultValue={result.location}
							placeholder='Location of Incident'
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId='formal_complaint'>
						<Form.Check
							type='checkbox'
							checked={result.formal_complaint}
							defaultValue={result.formal_complaint}
							label='I filed a formal police complaint'
							onChange={this.handleInputChange}
						/>
						<Form.Group controlId='formal_complaint_number'>
							<Form.Control
								defaultValue={result.formal_complaint_number}
								placeholder='Formal Complaint Number'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Group>

					<Form.Group controlId='witnesses_present'>
						<Form.Check
							type='checkbox'
							label='There were witnesses'
							checked={result.witnesses_present}
							defaultValue={result.witnesses_present}
							onChange={this.handleInputChange}
						/>
						<Form.Group controlId='witnesses_information'>
							<Form.Control
								as='textarea'
								rows='3'
								defaultValue={result.witnesses_information}
								placeholder='Witness Information'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Group>
					<Form.Group controlId='private'>
						<Form.Check
							type='checkbox'
							label='Keep Private'
							checked={result.private}
							defaultValue={result.private}
							onChange={this.handleInputChange}
						/>
					</Form.Group>
					<button type='submit'>Submit</button>
					<button className='deleteButton' onClick={this.deleteIncident}>
						Delete
					</button>
				</Form>
			</div>
		);
	}
}

export default EditIncident;
