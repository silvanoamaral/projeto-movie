'use strict'

import { expect } from 'chai'
import thunk from "redux-thunk"
import configureMockStore from 'redux-mock-store'

import getMovie from './fetchMovie'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const store = mockStore({})

describe('fetchMovie function', () => {
  
  it('Function searchByNameMovie "Homem Aranha"', () => {
    const result = getMovie.searchByNameMovie('Homem Aranha', 1)
    expect(result).to.be.a('function')
  })

  it('Function fetchMovie', () => {
    const result = getMovie.fetchMovie()
    expect(result).to.be.a('function')    
  })

  it('Function getByIDMovie ID: "475557"', () => {
    const result = getMovie.getByIDMovie('475557')
    expect(result).to.be.a('function')
  })

  it('Check return getByIDMovie ID: "475557"', () => {
    const response = store.dispatch(getMovie.getByIDMovie('475557'))
  })  
})