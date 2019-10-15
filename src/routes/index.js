import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Movie from '../page/Movie'
import Details from '../page/Details'
import NoMatch from '../components/NoMatch'

import history from './history'

const Routes = () => (
  <ConnectedRouter history={ history }>
    <Switch>
      <Route path='/' exact component={ Movie } />
      <Route path='/movie/:id' component={ Details } />
      <Route path='/movie' exact search={ '?page=:page' } component={ Movie } />
      <Route path='/search' exact search={ '?search=:search' } component={ Movie } /> 
      <Route component={ NoMatch } />
    </Switch>
  </ConnectedRouter>
)

export default Routes