import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Logo from '../../imgs/logo_transparent_background.png';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className='registration-page'>
			<div className='registration-container'>
				<img src={Logo} alt='logo' />
				<div className='form-container'>
					<Form>
						<Form.Row>
							<Form.Group as={Col} controlId='formGridEmail'>
								<Form.Label>Email</Form.Label>
								<Form.Control type='email' placeholder='Enter email' />
							</Form.Group>

							<Form.Group as={Col} controlId='formGridPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
						</Form.Row>
						<Form.Group controlId='formGridAddress1'>
							<Form.Label>Address</Form.Label>
							<Form.Control placeholder='1234 Main St' />
						</Form.Group>

						<Form.Group controlId='formGridAddress2'>
							<Form.Label>Address 2</Form.Label>
							<Form.Control placeholder='Apartment, studio, or floor' />
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col} controlId='formGridCity'>
								<Form.Label>City</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group as={Col} controlId='formGridState'>
								<Form.Label>State</Form.Label>
								<Form.Control as='select' defaultValue='Choose...'>
									<option>Choose...</option>
									<option value='AL'>AL</option>
									<option value='AK'>AK</option>
									<option value='AR'>AR</option>
									<option value='AZ'>AZ</option>
									<option value='CA'>CA</option>
									<option value='CO'>CO</option>
									<option value='CT'>CT</option>
									<option value='DC'>DC</option>
									<option value='DE'>DE</option>
									<option value='FL'>FL</option>
									<option value='GA'>GA</option>
									<option value='HI'>HI</option>
									<option value='IA'>IA</option>
									<option value='ID'>ID</option>
									<option value='IL'>IL</option>
									<option value='IN'>IN</option>
									<option value='KS'>KS</option>
									<option value='KY'>KY</option>
									<option value='LA'>LA</option>
									<option value='MA'>MA</option>
									<option value='MD'>MD</option>
									<option value='ME'>ME</option>
									<option value='MI'>MI</option>
									<option value='MN'>MN</option>
									<option value='MO'>MO</option>
									<option value='MS'>MS</option>
									<option value='MT'>MT</option>
									<option value='NC'>NC</option>
									<option value='NE'>NE</option>
									<option value='NH'>NH</option>
									<option value='NJ'>NJ</option>
									<option value='NM'>NM</option>
									<option value='NV'>NV</option>
									<option value='NY'>NY</option>
									<option value='ND'>ND</option>
									<option value='OH'>OH</option>
									<option value='OK'>OK</option>
									<option value='OR'>OR</option>
									<option value='PA'>PA</option>
									<option value='RI'>RI</option>
									<option value='SC'>SC</option>
									<option value='SD'>SD</option>
									<option value='TN'>TN</option>
									<option value='TX'>TX</option>
									<option value='UT'>UT</option>
									<option value='VT'>VT</option>
									<option value='VA'>VA</option>
									<option value='WA'>WA</option>
									<option value='WI'>WI</option>
									<option value='WV'>WV</option>
									<option value='WY'>WY</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId='formGridZip'>
								<Form.Label>Zip</Form.Label>
								<Form.Control />
							</Form.Group>
						</Form.Row>

						<Form.Group id='formGridCheckbox'>
							<Form.Check
								type='checkbox'
								label='I accept the Terms of Use and Privacy Policy'
							/>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Sign Up
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
