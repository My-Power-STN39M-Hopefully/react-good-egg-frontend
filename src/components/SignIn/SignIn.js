import React, { useEffect, Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import Form from 'react-bootstrap/Form';
import './SignIn.css';
import { GoodEggBackend } from '../../api/GoodEggBackend';
import RecentIncidentView from '../RecentIncidentView/RecentIncidentView';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: undefined,
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
	handleLoggedIn = () => {
		this.props.loggedInHandler();
		this.props.userEmailHandler(this.state.email);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.email && this.state.password) {
			GoodEggBackend()
				.post(
					'user/rest-auth/login/',
					{
						email: this.state.email,
						password: this.state.password,
					},
					{ withCredentials: true }
				)
				.then((response) => {
					console.log(response);
					//Cookies.set('access_token', response.headers['Set-Cookie']);
					sessionStorage.setItem('activeEmail', this.state.email);
					//window.location = '/';
					this.handleLoggedIn();
				})
				.catch((error) => {
					this.setError();
					console.log(error);
				});
		} else {
			this.setError();
		}
	};

	render() {
		if (this.props.loggedIn) {
			return <Redirect to='/' />;
		}
		return (
			<Form className='sign-in-form'>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Email'
						onChange={this.handleChange}
						name='email'
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
