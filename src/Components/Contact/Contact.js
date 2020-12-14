import classes from './Contact.module.css'
import Navigation from '../Navigation/Navigation'

const contact = () => {
	return (
		<div>
			<Navigation />
			<h1 className={classes.contactpageHeader}>Contact Page</h1>
		</div>
	)
}

export default contact
