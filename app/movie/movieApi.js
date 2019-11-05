'use strict'

const movieAuth = require('../auth/authPublicKey')
 
const getMovieList = (req, res, next) => {
  try {
    res.status(200).send('Olá')
  } catch(error) {
    res.status(400).send('error')
    next()
  }
}

module.exports = {
  getMovieList
}
