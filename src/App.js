import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Routes from './routes'
import store from './redux/store'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
        <Footer />
      </Provider>
    )
  }
}

export default App
