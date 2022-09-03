import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { MainDropdown } from "./Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

export const MainNavbar = () => {
  let navigate = useNavigate();
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand className="navBrand" onClick={() => navigate("/")}>
          <img
            alt="logo"
            src="../../src/assets/logoipsum-249.svg"
            width="30"
            height="30"
            className="d-inline-block align-center"
          />
          {"CheckListr"}
        </Navbar.Brand>
        {localStorage.length === 0 ? null : (
          <MainDropdown navigate={navigate} />
        )}
      </Container>
    </Navbar>
  );
};
