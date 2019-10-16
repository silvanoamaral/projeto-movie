import React, { Component } from 'react'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import { push } from 'connected-react-router'

import './Searchbar.scss'

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
    dispatch(push(`/search?query=${value}`))
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

      this.setState({
        value: ''
      })
    }
  }

  render() {
    return (
      <div className="search">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="search__form">
            <input
              type="text"
              name="search-movie"
              aria-label="search-movie"
              placeholder="Search Movie Title..."
              value={ this.state.value }
              alt="Search Movie Title..."
              onChange={ this.handleInputChange }
              autoComplete="off"
            />
            <button className="icone lupa" type="submit"></button>
          </form>
        </div>
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