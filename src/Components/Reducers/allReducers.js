import loggedInReducer from './loggedInReducer'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
  logIn:loggedInReducer
})

export default allReducer