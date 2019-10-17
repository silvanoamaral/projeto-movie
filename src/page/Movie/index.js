import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from '../../components/Card'
import Loading from '../../components/Loading'
import Searchbar from '../../components/Searchbar'
import Pagination from '../../components/Pagination'

import getMovie from '../../services/fetchMovie'

class Movie extends Component {

  checkQuery(parsed, page) {
    const { dispatch } = this.props
    parsed.query !== undefined ?
    dispatch(getMovie.searchByNameMovie(parsed.query, 1)) :
    dispatch(getMovie.fetchMovie(page))

    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  componentDidMount() {
    let page = 1
    const queryString = require('query-string')
    const parsed = queryString.parse(this.props.location.search)

    if(parsed.page !== undefined) {
      page = parsed.page
    }

    this.checkQuery(parsed, page)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const queryString = require('query-string')
      const parsed = queryString.parse(this.props.location.search)
      const page = parsed.page === undefined ? 1 : parsed.page      

      this.checkQuery(parsed, page)
    }
  }

  makeRequestPage = pageNumber => {
    const { dispatch } = this.props
    dispatch(getMovie.fetchMovie(pageNumber))

    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  render() {
    const { movie, pending } = this.props
    const isEmpty = movie.length === 0

    return (
      <div className="movie">
        <Searchbar />        
        {isEmpty
          ? (pending ? <Loading /> : <h2>Empty.</h2>)
          : <div className="container">
            <h1 className="title">Filmes populares</h1>
            <Card
              movie={ movie }
            />
            <Pagination
              data={ movie }
              makeRequestPage={ this.makeRequestPage }
            />
          </div>
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