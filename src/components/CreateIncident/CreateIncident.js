import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { GoodEggBackend } from '../../api/GoodEggBackend';

class CreateIncident extends Component {
	constructor() {
		super();
		this.state = {
			category: 'Conduct Unbecoming',
			officers_choices: [],
			officers: [],
			officer_description: '',
			description: '',
			date: '',
			time: '',
			location: '',
			formal_complaint: false,
			formal_complaint_number: '',
			witnesses_present: false,
			witnesses_information: '',
			private: false,
			bad_apple: true,
			unknown_officer_selected: false,
			successfulCreate: false,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
		GoodEggBackend()
			.get('officer')
			.then((response) => {
				this.setState({ officers_choices: response.data });
			})
			.catch((error) => {});
	}

	handleInputChange = (event) => {
		if (
			event.target.id === 'formal_complaint' ||
			event.target.id === 'witnesses_present' ||
			event.target.id === 'private' ||
			event.target.id === 'bad_apple'
		) {
			this.setState({ [event.target.id]: event.target.checked });
		} else {
			this.setState({ [event.target.id]: event.target.value });
		}
	};

	handleOfficerSelect = (event) => {
		let options = event.target.options;
		let officers = [];
		this.setState({ unknown_officer_selected: false });
		for (let i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
				let selection = parseInt(options[i].value);
				if (selection > -1) {
					officers.push(selection);
				} else {
					this.setState({ unknown_officer_selected: true });
				}
			}
		}
		this.setState({ officers: officers });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const newIncident = {
			category: this.state.category,
			officers: this.state.officers,
			officer_description: this.state.officer_description,
			description: this.state.description,
			date: this.state.date,
			time: this.state.time,
			bad_apple: this.state.bad_apple,
			location: this.state.location,
			formal_complaint: this.state.formal_complaint,
			formal_complaint_number: this.state.formal_complaint_number,
			witnesses_present: this.state.witnesses_present,
			witnesses_information: this.state.witnesses_information,
			private: this.state.private,
		};
		GoodEggBackend()
			.post('incident/', newIncident, { withCredentials: true })
			.then((response) => {
				this.setState({successfulCreate: true});
			})
			.catch((e) => {});
	};
	render() {
		if(this.state.successfulCreate){
			return <Redirect to="/" />
		}
		return (
			<div className='create-form'>
				<h1>Incident Form</h1>
				<Form className='incidentForm' onSubmit={this.handleSubmit}>
					<Form.Group controlId='category'>
						<Form.Label>Category</Form.Label>
						<Form.Control
							as='select'
							defaultValue='Conduct Unbecoming'
							onChange={this.handleInputChange}>
							<option>Conduct Unbecoming</option>
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
					{this.state.category === 'OTHER' && (
						<Form.Group controlId='category_description'>
							<Form.Control
								type='text'
								name='category'
								placeholder='Please Enter New Category'
								onChange={this.handleInputChange}></Form.Control>
						</Form.Group>
					)}

					<Form.Group controlId='bad_apple'>
						<Form.Check
							type='checkbox'
							checked={this.state.bad_apple}
							onChange={this.handleInputChange}
							name='bad_apple'
							label='This was a negative experience'
						/>
					</Form.Group>

					<Form.Group controlId='officers'>
						<Form.Label>Officer</Form.Label>
						<Form.Control
							as='select'
							multiple
							onChange={this.handleOfficerSelect}>
							<option value='-1'>Choose...</option>
							<option value='-1'>Unknown</option>
							{this.state.officers_choices.map((o, i) => {
								return (
									<option key={`officer-${i}`} value={o.id}>
										Badge #: {o.badge_number}-{o.first_name} {o.last_name}
									</option>
								);
							})}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId='officer_description'>
						<Form.Label>Officer Description</Form.Label>
						<Form.Control
							as='textarea'
							required={
								this.state.unknown_officer_selected ||
								this.state.officers.length === 0
							}
							placeholder='Description of officer, required if unknown officer chosen.'
							rows='3'
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId='description'>
						<Form.Label>Incident Description</Form.Label>
						<Form.Control
							as='textarea'
							required
							rows='3'
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId='date'>
							<Form.Label>Date</Form.Label>
							<Form.Control
								type='date'
								required
								onChange={this.handleInputChange}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId='time'>
							<Form.Label>Time</Form.Label>
							<Form.Control
								type='time'
								required
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='location'>
						<Form.Label>Location</Form.Label>
						<Form.Control
							type='textarea'
							placeholder='Location of Incident'
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId='formal_complaint'>
						<Form.Check
							type='checkbox'
							label='I filed a formal police complaint'
							checked={this.state.formal_complaint}
							onChange={this.handleInputChange}
						/>
						<Form.Group controlId='formal_complaint_number'>
							<Form.Control
								placeholder='Formal Complaint Number'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Group>

					<Form.Group controlId='witnesses_present'>
						<Form.Check
							type='checkbox'
							checked={this.state.witnesses_present}
							label='There were witnesses'
							onChange={this.handleInputChange}
						/>
						<Form.Group controlId='witnesses_information'>
							<Form.Control
								as='textarea'
								rows='3'
								placeholder='Witness Information'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Group>
					<Form.Group controlId='private'>
						<Form.Check
							type='checkbox'
							checked={this.state.private}
							label='Keep Private'
							onChange={this.handleInputChange}
						/>
					</Form.Group>
					<button>Submit</button>
				</Form>
			</div>
		);
	}
}
export default CreateIncident;
