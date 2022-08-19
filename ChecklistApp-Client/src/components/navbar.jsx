import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const MainNavbar = () => {

	return(

		<Navbar scrolling dark expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
				alt="logo"
				src="../../src/assets/logoipsum-249.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'CheckListr'} 
          </Navbar.Brand>
        </Container>
      </Navbar>

	)

}
