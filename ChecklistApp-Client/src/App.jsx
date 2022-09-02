import "./App.css";
import { MainNavbar } from "./components/Navbar/Navbar.jsx";
import { MainScreen } from "../src/Home/Home";
import { FooterApp } from "./components/Footer/Footer.jsx";
import { Dashboard } from "../src/Dashboard/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "../src/Profile/Profile.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<MainScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <FooterApp />
      </Router>
    </div>
  );
}

export default App;
