import UnAuth from '../UnAuth/UnAuth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = (props) =>{
	const logIn = useSelector(state => state.logIn)

	return logIn ? (
		<Route path={props.path} component={props.component} />
	) : (
		<Route path={props.path} component={UnAuth} />
	)
}


export default PrivateRoute
