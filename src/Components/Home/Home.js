import classes from './Home.module.css'
import Navigation from '../Navigation/Navigation'

const home = () => {
	return (
		<div>
			<Navigation />
			<h1 className={classes.homepageHeader}>Home Page</h1>
		</div>
	)
}

export default home
