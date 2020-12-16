import classes from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { logOut } from '../Actions/Action'
import { useDispatch } from 'react-redux'

const Navigation = () => {
	const dispatch = useDispatch()
	const eraseLocalStorage = () => {
		localStorage.clear()
	}

	return (
		<nav>
			<div className={classes.logo}>Logo</div>
			<ul className={classes.navLinks}>
				<Link className={classes.link} to="/home">
					<li>Home</li>
				</Link>
				<Link className={classes.link} to="/contact">
					<li>Contact</li>
				</Link>
				<Link className={classes.link} to="/">
					<li
						onClick={() => {
							eraseLocalStorage()
							dispatch(logOut())
						}}
					>
						Log Out
					</li>
				</Link>
			</ul>
		</nav>
	)
}

export default Navigation
