import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { movieReducer } from './movieReducer'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movieReducer
})

export default rootReducer