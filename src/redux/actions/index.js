import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR
} from './actionTypes'

export const fetchMarvelPending = () => ({
  type: FETCH_MOVIE_PENDING
})

export const fetchMarvelSuccess = marvel => ({
  type: FETCH_MOVIE_SUCCESS,
  marvel
})

export const fetchMarvelError = error => ({
  type: FETCH_MOVIE_ERROR,
  error
})