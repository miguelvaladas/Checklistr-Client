import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../../src/components/mainmodalbox.css";
import React, { useState } from 'react';

export const MainScreenModal = (props) => {

	// const [showRegister,setShowRegister] = useState(false);		
	const [showLogin, setShowLogin] = useState(true);

	const Login = () => {
		return(
		<div>
		<h2>Login</h2>	
		<form>
			<div><label for="username">Username:</label></div>
			<div class="formFields"><input type="text" name='username' placeholder=" ✉️ Insert username...">
			</input></div>
			<div><label for="password">Password:</label></div>

			<div class="formFields"><input type="text" name="password" placeholder=' 🔑 Insert password...'></input>
			</div>
			 <div>
		<input class="submitButton" type="submit" value="Submit"></input>
			</div>
		</form>
			<p>You do not have an account? Click <a onClick={() => {
				setShowLogin(false);
				// setShowRegister(true);
				}}>here</a> to sign-up.</p>
		</div>
		)
	}


	return ( 
		<Modal {...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
		
		<Modal.Header closeButton>
		</Modal.Header>

		<Modal.Body>
			{showLogin ? <Login /> : null}	
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
		</Modal>
	)	


}
