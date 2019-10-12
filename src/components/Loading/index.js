import React, { Component } from 'react'

import './Loading.scss'

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h2 className="spinner">Loading...</h2>
      </div>
    )
  }
}

export default Loading