import React, { useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import Form from 'react-bootstrap/Form';
import './SignIn.css';
import { GoodEggBackend } from '../../api/GoodEggBackend';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: undefined,
			password: undefined,
			error: false,
			errorMessage: undefined,
		};
	}

	setError = () => {
		this.setState({ error: true });
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.username && this.state.password) {
			GoodEggBackend()
				.post('user/signin/', {
					username: this.state.username,
					password: this.state.password,
				})
				.then((response) => {
					sessionStorage.setItem('token', response.data.token);
					sessionStorage.setItem('activeUsername', this.state.username);
					window.location = '/';
				})
				.catch((error) => {
					this.setError();
				});
		} else {
			this.setError();
		}
	};

	render() {
		return (
			<Form className='sign-in-form'>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Username'
						onChange={this.handleChange}
						name='username'
					/>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						onChange={this.handleChange}
						name='password'
					/>
				</Form.Group>
				<button
					type='submit'
					className='sign-in-button'
					onClick={this.handleSubmit}>
					Submit
				</button>
				<Link to='/sign-up'>New to GoodEgg?</Link>
				{this.state.error && <p style={{ color: 'red' }}>Login Failed</p>}
			</Form>
		);
	}
}

export default SignIn;
