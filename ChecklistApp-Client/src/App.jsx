import "./App.css";
import { MainNavbar } from "./components/Navbar/Navbar.jsx";
import { MainScreen } from "../src/Home/Home";
import { FooterApp } from "./components/Footer/Footer.jsx";
import { Dashboard } from "../src/Dashboard/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<MainScreen />} />
          <Route path="/dashboard/" element={<Dashboard />} />
        </Routes>
      </Router>
      <FooterApp />
    </div>
  );
}

export default App;
