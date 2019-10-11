import { FETCH_MOVIE_ERROR, FETCH_MOVIE_PENDING, FETCH_MOVIE_SUCCESS } from '../actions/actionTypes'

const initialState = {
  pending: false,
  movie: [],
  error: null
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        pending: false,
        movie: action.movie
      }
    case FETCH_MOVIE_ERROR: 
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case FETCH_MOVIE_PENDING:
      return {
        ...state,
        pending: true,
        movie: []
      }
    default:
      return state;
  }
}

export const fetchMovieError = () => ({
  type: FETCH_MOVIE_ERROR
})

export const fetchMoviePendent = () => ({
  type: FETCH_MOVIE_PENDING
})