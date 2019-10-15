import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import history from "../../routes/history"
import reduces from '../reduces'

const middlewares = [
  thunk,
  routerMiddleware(history)
]

const store = createStore (
  connectRouter(history)(reduces(history)),
  applyMiddleware(...middlewares)
)

export default store