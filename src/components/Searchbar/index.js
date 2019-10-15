import React, { Component } from 'react'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import { push } from 'connected-react-router'

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
        <form onSubmit={this.handleSubmit} className="search__form">
          <input
            name="search-movie"
            aria-label="search-movie"
            placeholder="Buscar por..."
            value={ this.state.value }
            alt="Buscar por..."
            onChange={ this.handleInputChange }
          />
          <button className="btn btn-primary" type="submit">Buscar</button>
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