import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const MainNavbar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="../../src/assets/logoipsum-249.svg"
            width="30"
            height="30"
            className="d-inline-block align-center"
          />
          {"CheckListr"}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
