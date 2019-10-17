import React from 'react'

import './MovieDetails.scss'

const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' } 

const MovieDetails = obj => {
  const { title, overview, poster_path, vote_average, release_date } = obj.movie
  window.scrollTo({top: 0, behavior: 'smooth'})
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
          <strong>Sinopse e detalhes</strong>
          <p>{ overview }</p>
          <p className="release__date">
            <span>Data de lançamento:</span>
            { new Date(release_date).toLocaleDateString('pt-br', optionsDate) }
          </p>
          <p>
            <span>Média de votos: </span>
            { vote_average }
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails