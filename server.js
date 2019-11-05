const express    = require('express')
const path       = require('path')
const bodyParser = require('body-parser')
const fetch      = require('node-fetch')
const { getMovieList } = require('./app/movie/movieApi')

const app = express()
const port = process.env.PORT || 5001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/movie/', getMovieList)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'dist','index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))
