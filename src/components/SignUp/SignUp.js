import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './SignUp.css';

function SignUp() {
	return (
		<div className='sign-up-form'>
			<Form>
				<Form.Group as={Col} controlId='formGridName'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='name' placeholder='Enter Name' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' placeholder='Email' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridNationality'>
					<Form.Label>Nationality</Form.Label>
					<Form.Control placeholder='Nationality' />
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

				<button variant='primary' type='submit'>
					Submit
				</button>
			</Form>
		</div>
	);
}

export default SignUp;
