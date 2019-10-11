import React, { Component } from 'react'

import MovieDetails from '../../components/MovieDetails'

class Details extends Component {
  state = {
    data: []
  }

  getData = id => {
    const apiKey = 'e2c70d159f475c3cf6bd625fd21f2312'

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        data
      })
    })
    .catch(error => {
      console.error(error)
      return []
    })
  }

  componentDidMount() {
    const { match } = this.props
    this.getData(match.params.id)
  }

  render() {
    const { data } = this.state
    return (
      <div className="details">
        <h2>Details Movie</h2>
        {data
          &&
          <MovieDetails movie={ data } />
        }
      </div>
    )
  }
}

export default Details