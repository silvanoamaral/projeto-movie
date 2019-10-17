import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src={require('../../../public/image/logo.svg')}
                alt="The Movie Database (TMDb)"
                width="81"
                height="72"
              />
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header