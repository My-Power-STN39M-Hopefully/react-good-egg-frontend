import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import Form from 'react-bootstrap/Form';
import './SignIn.css';

function SignIn() {
	//logic for setting state of user and checking authentication
	return (
		<Form className='sign-in-form'>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control type='email' placeholder='Enter email' />
				<Form.Text className='text-muted'>
					We'll never EVER share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control type='password' placeholder='Password' />
			</Form.Group>
			<button type='submit' className='sign-in-button'>
				Submit
			</button>
			<Link to='/sign-up'>New to GoodEgg?</Link>
		</Form>
	);
}

export default SignIn;
