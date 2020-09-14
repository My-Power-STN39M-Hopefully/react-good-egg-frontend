import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './EditIncident.css';
import { GoodEggBackend } from '../../api/GoodEggBackend';
import { Redirect } from 'react-router-dom';

class EditIncident extends Component {
	constructor() {
		super();
		this.state = {
			editedIncident: {},
			updatedIncident: false,
		};
	}

	componentDidMount() {
		GoodEggBackend()
			.get(`incident/${this.props.editIncidentId}`)
			.then((response) => {
				this.setState({ editedIncident: response.data });
			})
			.catch((error) => {
				console.log('error');
			});
		window.scrollTo(0, 0);
	}

	setEditIncident = (incident) => {
		this.setState({ editedIncident: incident });
	};

	handleInputChange = (event) => {
		const editIncident = this.state.editedIncident;
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
		console.log(this.state.editedIncident);
		event.preventDefault();
		GoodEggBackend()
			.put(`incident/${this.props.editIncidentId}`, this.state.editedIncident, {
				withCredentials: true,
			})
			.then((response) => {
				this.setState({ updatedIncident: true });
			})
			.catch((e) => {});
		//const newIncident = this.state.editedIncident;
		//const url = `/incidents/edit/${newIncident.id}`;
		// newIncident will be the updated object we sent in the PUT request.
		//url endpoint may have to be adjusted to match backend.
		//we can run put request and then redirect to profile.
	};

	deleteIncident = (event) => {
		event.preventDefault();
		//const newIncident = this.state.editedIncident;
	};

	render() {
		if (this.state.updatedIncident) {
			return <Redirect to='/profile' />;
		}
		return (
			<div className='create-form'>
				<h1>Edit Incident Form</h1>
				<Form className='incidentForm' onSubmit={this.handleSubmit}>
					<Form.Group controlId='category'>
						<Form.Label>Category</Form.Label>
						<Form.Control
							as='select'
							defaultValue={this.state.editedIncident.category}
							// defaultValue={this.state.editedIncident.category}
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
					{this.state.editedIncident.category === 'OTHER' && (
						<Form.Group controlId='category_description'>
							<Form.Control
								type='text'
								defaultValue={this.state.editedIncident.category_description}
								// placeholder='Please Enter New Category'
								onChange={this.handleInputChange}></Form.Control>
						</Form.Group>
					)}

					<Form.Group controlId='officers'>
						<Form.Label>Officer</Form.Label>
						<Form.Control
							as='select'
							defaultValue={this.state.editedIncident.officers}
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

					{this.state.editedIncident.officers === 'Unknown' && (
						<Form.Group controlId='officer_description'>
							<Form.Control
								type='text'
								defaultValue={this.state.editedIncident.officers_description}
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
							defaultValue={this.state.editedIncident.description}
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId='date'>
							<Form.Label>Date</Form.Label>
							<Form.Control
								type='date'
								defaultValue={this.state.editedIncident.date}
								onChange={this.handleInputChange}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId='time'>
							<Form.Label>Time</Form.Label>
							<Form.Control
								type='time'
								defaultValue={this.state.editedIncident.time}
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='location'>
						<Form.Label>Location</Form.Label>
						<Form.Control
							type='textarea'
							defaultValue={this.state.editedIncident.location}
							placeholder='Location of Incident'
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId='formal_complaint'>
						<Form.Check
							type='checkbox'
							checked={this.state.editedIncident.formal_complaint}
							defaultValue={this.state.editedIncident.formal_complaint}
							label='I filed a formal police complaint'
							onChange={this.handleInputChange}
						/>
						<Form.Group controlId='formal_complaint_number'>
							<Form.Control
								defaultValue={this.state.editedIncident.formal_complaint_number}
								placeholder='Formal Complaint Number'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Group>

					<Form.Group controlId='witnesses_present'>
						<Form.Check
							type='checkbox'
							label='There were witnesses'
							checked={this.state.editedIncident.witnesses_present}
							defaultValue={this.state.editedIncident.witnesses_present}
							onChange={this.handleInputChange}
						/>
						<Form.Group controlId='witnesses_information'>
							<Form.Control
								as='textarea'
								rows='3'
								defaultValue={this.state.editedIncident.witnesses_information}
								placeholder='Witness Information'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Group>
					<Form.Group controlId='private'>
						<Form.Check
							type='checkbox'
							label='Keep Private'
							checked={this.state.editedIncident.private}
							defaultValue={this.state.editedIncident.private}
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
