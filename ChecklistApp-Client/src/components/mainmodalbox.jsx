import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const MainScreenModal = (props) => {

	return ( 
		<Modal {...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
		
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter"> HEADING </Modal.Title>
		</Modal.Header>

		<Modal.Body>
		<h1>LOTS OF TEXT</h1>
		<p>BLABLABLABLABALkasjdhfkjashdkjashdkjashdkjashdkjahskdjahskdjhsakjdhaskjdhkasjdhkasjhdkasj</p>
		</Modal.Body>
		
		<Modal.Footer>
			<Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>




		</Modal>


	)	


}
