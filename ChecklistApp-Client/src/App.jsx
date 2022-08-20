import './App.css'
import {MainNavbar} from "./components/navbar.jsx";
import {MainScreen} from "./components/mainscreen.jsx";
import {FooterApp} from "./components/footer";
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
				<Route path="/app/" />
			</Routes>
		</Router>	
		<FooterApp />
	  </div>
  )
}

export default App
