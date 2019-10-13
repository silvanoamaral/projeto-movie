import React, { Component } from 'react'
import { useHistory } from "react-router-dom"
import debounce from 'lodash.debounce'
import { connect } from 'react-redux'

import getMovie from '../../services/fetchMovie'

const waitTime = 500
class Searchbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      value: ''
    }
  }

  componentDidUpdate(prevProps) {
    /* console.log('Searchbar - this.props.location',this.props)
    console.log('Searchbar - prevProps.location',prevProps) */
  }

  debounceSingle = debounce(value => {
    if(value.length > 2 && value !== '') {
      const { dispatch } = this.props
      dispatch(getMovie.searchByNameMovie(value, 1))
    }
  }, waitTime)

  handleInputChange = event => {
    const { value } = event.target
    //this.debounceSingle(value)
    this.setState({
      value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.debounceSingle(this.state.value)
  }

  render() {
    const { value } = this.state

    return (
      <div className="searchForm">
        <form onSubmit={this.handleSubmit}>
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