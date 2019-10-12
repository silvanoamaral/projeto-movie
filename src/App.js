import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Searchbar from './components/Searchbar'
import Movie from './page/Movie'
import Details from './page/Details'
import NoMatch from './components/NoMatch'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Searchbar/>
        <Router>
          <Switch>
            <Route path='/' exact component={ Movie } />
            <Route path='/movie/:id' component={ Details } />
            <Route path='/movie' exact search={ '?page=:page' }  component={ Movie } />            
            <Route component={ NoMatch } />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
