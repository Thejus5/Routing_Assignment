import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	const [userInput, setUserInput] = useState(null)

	const authenticateUser = () => {
		console.log('Aut function')
		if (localStorage.getItem('user')) return true
		else return false
	}

	const writeToLocalStorage = (e) => {
		setUserInput(e.target.value)
		localStorage.setItem('user', e.target.value)
	}

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact render={() => <Login change={writeToLocalStorage} />} />
					<PrivateRoute path="/home" component={Home} authenticated={authenticateUser()} />
					<PrivateRoute path="/contact" component={Contact} authenticated={authenticateUser()} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
