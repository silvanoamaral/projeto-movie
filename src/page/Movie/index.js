import React, { Component } from 'react'

import Card from '../../components/Card'
import Pagination from '../../components/Pagination'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popular: []
    }
  }

  makeHttpRequestWithPage = async pageNumber => {
    const apiKey = 'e2c70d159f475c3cf6bd625fd21f2312'
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${pageNumber}`)
    .catch(err => {
      console.error('Failed retrieving information', err)
    })

    const data = await response.json()

    this.setState({
      popular: data
    })

    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  componentDidMount() {
    let page = 1
    const queryString = require('query-string')
    const parsed = queryString.parse(this.props.location.search)
    if(parsed.page !== undefined) {
      page = parsed.page
    }

    this.makeHttpRequestWithPage(page)
  }
/* 
  componentDidUpdate(prevProps, prevState) {

    if (Object.entries(prevState.popular).length) {
      const queryString = require('query-string')
      const parsed = queryString.parse(this.props.location.search)
      const pagePrevProps = queryString.parse(prevProps.location.search)
  
      if (parsed !== pagePrevProps.page) {
        console.log('componentDidUpdate',pagePrevProps.page)
        //this.makeHttpRequestWithPage(pagePrevProps.page)
      }
    }
  } */

  render() {
    return (
      <div className="movie">
        <h1>Popular Movies</h1>
        <Card
          movie={ this.state.popular }
        />
        <Pagination
          data={ this.state.popular }
          makeHttpRequestWithPage={ this.makeHttpRequestWithPage }
        />
      </div>
    )
  }
}

export default Movie