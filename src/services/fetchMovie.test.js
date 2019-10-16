'use strict'

import { expect } from 'chai'
import thunk from "redux-thunk"
import configureMockStore from 'redux-mock-store'
import { fetchMoviePending, fetchMovieSuccess, fetchMovieError } from '../redux/actions'
import getMovie from './fetchMovie'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const store = mockStore({})

describe('fetchMovie function', () => {

  it('Function fetchMovie', () => {
    const result = getMovie.fetchMovie()
    expect(result).to.be.a('function')    
  })

  it('Function fetchMovie with pageNumber = 1', () => {
    const result = getMovie.fetchMovie(1)
    expect(result).to.be.a('function')
  })

  it('Function getByIDMovie ID: "475557"', () => {
    const result = getMovie.getByIDMovie('475557')
    expect(result).to.be.a('function')
  })

  it('Function searchByNameMovie "Homem Aranha"', () => {
    const result = getMovie.searchByNameMovie('Homem Aranha', 1)
    expect(result).to.be.a('function')
  })

  //Dispatch
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions()
  })

  it('dispatch function fetchMovie(1) page = 1 ', () => {
    const expectedActions = [
      { 'type': 'FETCH_MOVIE_PENDING' },
      { 'type': 'FETCH_MOVIE_SUCCESS', 'movie': {}} 
    ]

    store.dispatch(getMovie.fetchMovie(1))
    store.dispatch(fetchMovieSuccess({}))
    expect(store.getActions()).to.deep.equal(expectedActions)
  })

  it('dispatch function getByIDMovie(475557)', () => {
    const expectedActions = [
      { 'type': 'FETCH_MOVIE_PENDING' },
      { 'type': 'FETCH_MOVIE_SUCCESS', 'movie': {} }
    ]

    store.dispatch(getMovie.getByIDMovie(475557))
    store.dispatch(fetchMovieSuccess({}))    
    expect(store.getActions()).to.deep.equal(expectedActions)
  })

  it('dispatch function searchByNameMovie("Homem Aranha", 1)', () => {
    const expectedActions = [
      { 'type': 'FETCH_MOVIE_PENDING' },
      { 'type': 'FETCH_MOVIE_SUCCESS', 'movie': {} }
    ]

    store.dispatch(getMovie.searchByNameMovie('Homem Aranha', 1))
    store.dispatch(fetchMovieSuccess({}))
    expect(store.getActions()).to.deep.equal(expectedActions)
  })
})