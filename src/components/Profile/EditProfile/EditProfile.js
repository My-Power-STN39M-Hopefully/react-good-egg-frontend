import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './EditProfile.css';

class EditProfile extends Component {
	state = {
		redirect: false,
	};
	handleUpdate = (e) => {
		e.preventDefault();
		this.setState({ redirect: true });
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to='/profile' />;
		}
		return (
			<Form className='edit-profile-form'>
				<Form.Group as={Col} controlId='formGridName'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='name' placeholder='Enter Name' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' placeholder='Email' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPhone'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control type='phone' placeholder='Phone' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridNationality'>
					<Form.Label>Nationality</Form.Label>
					<Form.Control placeholder='Nationality' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridRace'>
					<Form.Label>Race</Form.Label>
					<Form.Control placeholder='Race' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridGender'>
					<Form.Label>Gender</Form.Label>
					<Form.Control placeholder='Gender' />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId='formGridCity'>
						<Form.Label>City</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group controlId='formGridState'>
						<Form.Label>State</Form.Label>
						<Form.Control as='select' defaultValue='Choose...'>
							<option>Choose...</option>
							<option>IL</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>

				<button type='submit' onClick={this.handleUpdate}>
					Update
				</button>
			</Form>
		);
	}
}

export default EditProfile;
