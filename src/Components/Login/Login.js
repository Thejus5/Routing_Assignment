import classes from './Login.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../Actions/Action'

const Login = (props) => {
	const loggedInState = useSelector((state) => state.logIn)
	const dispatch = useDispatch()

	const validateUserLogin = () => {
		if (localStorage.getItem('user')) {
			dispatch(logIn())
		}
	}

	// useEffect(() => {
	// 	if (localStorage.getItem('user')) {
	// 		console.log('Login')
	// 		dispatch(logIn())
	// 		window.location.pathname = '/home'
	// 	}
	// },[])

	return (
		<div className={classes.loginCard}>
			<input className={classes.usernameField} type="text" onBlur={props.change} />
			<Link to="/home">
				<button className={classes.loginBtn} onClick={validateUserLogin()}>
					Log In
				</button>
			</Link>
		</div>
	)
}

export default Login
