import classes from './UnAuth.module.css'
import { Link } from 'react-router-dom'

const unAuth = ()=>{
  return (
		<div className={classes.unAuth}>
			<p>You are not authorized to view this content</p>
			<Link to="/">
				<button className={classes.backToLoginBtn}>Back to login</button>
			</Link>
		</div>
	)
}

export default unAuth