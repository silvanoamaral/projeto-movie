import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'

import getMovie from '../../services/fetchMovie'

const history = createBrowserHistory()
const waitTime = 500
class Searchbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      value: ''
    }
  }

  debounceSingle = debounce(value => {
    const { dispatch } = this.props
    dispatch(getMovie.searchByNameMovie(value, 1))
  }, waitTime)

  handleInputChange = event => {
    const { value } = event.target
    this.setState({
      value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { value } = this.state
    if(value.length > 2 && value !== '') {
      this.debounceSingle(value)

      history.push(`/search?query=${value}`)

      this.setState({
        value: ''
      })
    }
  }

  render() {
    const { value } = this.state

    return (
      <div className="search">
        <form onSubmit={this.handleSubmit} className="search__form">
          <input
            name="search-movie"
            aria-label="search-movie"
            placeholder="Search for..."
            value={ value }
            alt="Search for..."
            onChange={ this.handleInputChange }
          />
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { movieReducer } = state

  const {
    error,
    pending,
    movie
  } = movieReducer || {
    error: false,
    pending: true,
    movie: []
  }

  return {
    error,
    pending,
    movie
  }
}

export default connect(
  mapStateToProps,
)(Searchbar)