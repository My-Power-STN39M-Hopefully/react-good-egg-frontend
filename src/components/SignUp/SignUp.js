import React, { Component, Redirect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './SignUp.css';
import { GoodEggBackend } from '../../api/GoodEggBackend';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: undefined,
			password1: undefined,
			password2: undefined,
			first_name: undefined,
			last_name: undefined,
			nationality: undefined,
			gender: undefined,
			race: undefined,
			city: undefined,
			state: undefined,
			phone_number: undefined,
			loggedIn: false,
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
		if (this.state.email && this.state.password1 && this.state.password2) {
			GoodEggBackend()
				.post('user/rest-auth/registration/', {
					email: this.state.email,
					password1: this.state.password1,
					password2: this.state.password2,
					first_name: this.state.first_name,
					last_name: this.state.last_name,
					nationality: this.state.nationality,
					gender: this.state.gender,
					race: this.state.race,
					city: this.state.city,
					state: this.state.state,
					phone_number: this.state.phone_number,
				})
				.then((response) => {
					console.log(response);
					this.setState({ loggedIn: true });
				})
				.catch((error) => {
					this.setError();
				});
		} else {
			this.setError();
		}
	};

	render() {
		if (this.state.loggedIn) {
			return <Redirect to='/sign-in' />;
		}
		return (
			<Form className='sign-up-form'>
				<Form.Group as={Col} controlId='formGridEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						required
						onChange={this.handleChange}
						name='email'
						placeholder='Email'
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						required
						onChange={this.handleChange}
						name='password1'
						placeholder='Password'
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPasswordConfirm'>
					<Form.Label>Password Confirm</Form.Label>
					<Form.Control
						onChange={this.handleChange}
						required
						type='password'
						name='password2'
						placeholder='Password Confirm'
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridFirstName'>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type='text'
						onChange={this.handleChange}
						name='first_name'
						placeholder='Enter First Name'
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridLastName'>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type='text'
						onChange={this.handleChange}
						name='last_name'
						placeholder='Enter Last Name'
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridNationality'>
					<Form.Label>Nationality</Form.Label>
					<Form.Control
						placeholder='Nationality'
						onChange={this.handleChange}
						name='nationality'
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridGender'>
					<Form.Label>Gender</Form.Label>
					<Form.Control
						onChange={this.handleChange}
						placeholder='Gender'
						name='gender'
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridRace'>
					<Form.Label>Race</Form.Label>
					<Form.Control
						onChange={this.handleChange}
						placeholder='Race'
						name='race'
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPhoneNumber'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						onChange={this.handleChange}
						placeholder='Phone Number'
						name='phone_number'
					/>
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId='formGridCity'>
						<Form.Label>City</Form.Label>
						<Form.Control
							onChange={this.handleChange}
							placeholder='City'
							name='city'
						/>
					</Form.Group>

					<Form.Group controlId='formGridState'>
						<Form.Label>State</Form.Label>
						<Form.Control
							as='select'
							name='state'
							onChange={this.handleChange}
							defaultValue='Choose...'>
							<option>Choose...</option>
							<option>IL</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>

				<button variant='primary' type='submit' onClick={this.handleSubmit}>
					Submit
				</button>
			</Form>
		);
	}
}

export default SignUp;
