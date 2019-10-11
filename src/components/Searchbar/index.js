import React, { Component } from 'react'
import debounce from 'lodash.debounce'

const waitTime = 500

class Searchbar extends Component {
  state = {
    query: '',
    isLoading: false,
    results: [],
    value: ''
  }

  debounceSingle = debounce(value => {
    if(value.length > 2 && value !== '') {
      this.getData(value)
    }
  }, waitTime)

  getData = value => {
    const apiKey = 'e2c70d159f475c3cf6bd625fd21f2312'

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${value}`)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
    })
    .catch(error => {
      console.error(error)
      return []
    })
  }

  handleInputChange = event => {
    const { value } = event.target
    this.debounceSingle(value)
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { query } = this.state

    return (
      <div className="searchForm">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Search for..."
            value={ query }
            onChange={ this.handleInputChange }
          />
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
    )
  }
}

export default Searchbar