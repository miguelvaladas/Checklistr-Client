import './App.css'
import {MainNavbar} from "./components/Navbar/navbar.jsx";
import {MainScreen} from "../src/Home/mainscreen.jsx";
import {FooterApp} from "./components/Footer/footer.jsx";
import {Dashboard} from "../src/Dashboard/dashboard.jsx";
import {
	BrowserRouter as Router,
	Routes, 
	Route
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
		<MainNavbar />
		<Router>
			<Routes>
				<Route exact path='/' element={<MainScreen />} />
				<Route path="/dashboard/" element={<Dashboard />} />
			</Routes>
		</Router>	
		<FooterApp />
	  </div>
  )
}

export default App
