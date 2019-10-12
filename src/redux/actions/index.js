import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR
} from './actionTypes'

export const fetchMoviePending = () => ({
  type: FETCH_MOVIE_PENDING
})

export const fetchMovieSuccess = movie => ({
  type: FETCH_MOVIE_SUCCESS,
  movie
})

export const fetchMovieError = error => ({
  type: FETCH_MOVIE_ERROR,
  error
})