import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loading from '../../components/Loading'
import Searchbar from '../../components/Searchbar'
import MovieDetails from '../../components/MovieDetails'

import getMovie from '../../services/fetchMovie'

class Details extends Component {

  componentDidMount() {
    const { match, dispatch } = this.props
    dispatch(getMovie.getByIDMovie(match.params.id))
  }

  render() {
    const { movie, pending } = this.props
    const isEmpty = movie.length === 0

    return (
      <div className="details">
        {isEmpty
          ? (pending ? <Loading /> : <h2>Empty.</h2>)
          : <>
            <Searchbar />
            <MovieDetails movie={ movie } />
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
)(Details)