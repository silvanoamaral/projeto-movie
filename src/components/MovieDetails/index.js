import React from 'react'

import './MovieDetails.scss'

const MovieDetails = obj => {
  const { title, overview, poster_path, vote_average } = obj.movie
  return (
    <div className="movie__details">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
          alt={ title }
        />
      </figure>
      <div className="info">
        <h1>{ title }</h1>
        <div className="info__overview">
          <strong>Visão global</strong>
          <p>{ overview }</p>
        </div>
        <div className="acceptance">
          <div>
            { vote_average }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails