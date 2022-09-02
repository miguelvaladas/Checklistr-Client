import "../Navbar.css";
import Navbar from "react-bootstrap/Navbar";

export const MainDropdown = ({ navigate }) => {
  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="navText">
        <Dropdown>
          <Dropdown.Toggle id="dropdown">
            <img src="https://img.icons8.com/doodle/48/000000/user-male-circle.png" />
            {localStorage.getItem("username")}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => navigate("/")}>
              Homepage
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/dashboard")}>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/profile")}>
              Profile
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Text>
    </Navbar.Collapse>
  );
};
