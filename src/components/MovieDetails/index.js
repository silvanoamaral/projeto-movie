import React from 'react'

const MovieDetails = obj => {
  const { title, overview, poster_path } = obj.movie
  return (
    <div className="movie__details">
      <h2>Details Movie</h2>
      <h1>{ title }</h1>
      <p>{ overview }</p>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
          alt={ title }
        />
      </figure>
    </div>
  )
}

export default MovieDetails