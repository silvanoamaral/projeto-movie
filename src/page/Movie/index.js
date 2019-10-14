import React, { Component } from 'react'
import { connect } from 'react-redux'

import getMovie from '../../services/fetchMovie'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'
import Loading from '../../components/Loading'

class Movie extends Component {

  componentDidMount() {
    let page = 1
    const queryString = require('query-string')
    const parsed = queryString.parse(this.props.location.search)

    if(parsed.page !== undefined) {
      page = parsed.page
    }

    const { dispatch } = this.props

    parsed.query !== undefined ?
    dispatch(getMovie.searchByNameMovie(parsed.query, 1)) :
    dispatch(getMovie.fetchMovie(page))
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const queryString = require('query-string')
      const parsed = queryString.parse(this.props.location.search)
      const page = parsed.page === undefined ? 1 : parsed.page
      const { dispatch } = this.props
      dispatch(getMovie.fetchMovie(page))

      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }

  makeHttpRequestWithPage = pageNumber => {
    const { dispatch } = this.props
    dispatch(getMovie.fetchMovie(pageNumber))

    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  render() {
    const { movie, error, pending } = this.props
    const isEmpty = movie.length === 0

    return (
      <div className="movie">
        <h1>Popular Movies</h1>
        {isEmpty
          ? (pending ? <Loading /> : <h2>Empty.</h2>)
          : <>
            <Card
              movie={ movie }
            />
            <Pagination
              data={ movie }
              makeHttpRequestWithPage={ this.makeHttpRequestWithPage }
            />
          </>
        }
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
)(Movie)