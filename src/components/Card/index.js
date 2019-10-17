import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Card.scss'

const ellipsisText = text => {
  return text !== '' ? `${text.substring(0, 190)}...` : null
}

const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' } 

class Card extends Component {
  render() {
    const { results } = this.props.movie

    return (
      <>
        <div className="results">
          {
            results && results.map(item => {
              return <div className="item" key={ item.id }>
                <figure>
                  <Link 
                    to={`/movie/${item.id}`}
                    aria-label={`movie-${item.title}`}
                    accessKey={`movie-${item.title}-${item.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`}
                      alt={ item.title }
                    />
                  </Link>
                </figure>
                <div className="info">
                  <div className="info__top">
                    <div className="acceptance">
                      <div>
                      { item.vote_average }
                      </div>
                    </div>
                    <div className="title">
                      <Link
                        to={`/movie/${item.id}`}
                        aria-label={`movie-${item.title}`}
                        accessKey={`movie-${item.title}-${item.id}`}
                      >
                        { item.title }
                      </Link>
                      <span className="data">
                        { new Date(item.release_date).toLocaleDateString('pt-br', optionsDate) }
                      </span>
                    </div>
                  </div>
                  <p className="overview">
                    <Link
                      to={`/movie/${item.id}`}
                      aria-label={`movie-${item.title}`}
                      accessKey={`movie-${item.title}-${item.id}`}
                    >
                      { ellipsisText(item.overview) }
                    </Link>
                  </p>
                </div>
              </div>
            })
          }
        </div>
      </>
    )
  }
}

export default Card