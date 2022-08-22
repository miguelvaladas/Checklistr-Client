import './App.css'
import {MainNavbar} from "./components/navbar.jsx";
import {MainScreen} from "./components/mainscreen.jsx";
import {FooterApp} from "./components/footer";
import {Dashboard} from "./components/dashboard.jsx";
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
