import { fetchMoviePending, fetchMovieSuccess, fetchMovieError } from '../redux/actions'

const apiKey = 'e2c70d159f475c3cf6bd625fd21f2312'

const fetchMovie = (pageNumber = 1) => {
  return dispatch => {
    dispatch(fetchMoviePending())

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${pageNumber}`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      dispatch(fetchMovieSuccess(res))
    })
    .catch(error => {
      console.log('Error:.', error,message)
      dispatch(fetchMovieError(error))
    })
  }
}

const getByIDMovie = movieId => {
  return dispatch => {
    dispatch(fetchMoviePending())
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      dispatch(fetchMovieSuccess(res))
    })
    .catch(error => {
      console.log('Error:.', error,message)
      dispatch(fetchMovieError(error))
    })
  }
}

const searchByNameMovie = (nameMovie, page = 1) => {
  return dispatch => {
    dispatch(fetchMoviePending())
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${nameMovie}&page=${page}`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      dispatch(fetchMovieSuccess(res))
    })
    .catch(error => {
      console.log('Error:.', error,message)
      dispatch(fetchMovieError(error))
    })
  }
}

export default {
  fetchMovie,
  getByIDMovie,
  searchByNameMovie
}