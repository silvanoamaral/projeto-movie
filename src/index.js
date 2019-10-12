import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { registerServiceWorker } from '../public/serviceWorker'

import reducer from './redux/reduces'

import App from './App'

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

registerServiceWorker()