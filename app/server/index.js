const express    = require('express')
const path       = require('path')
const bodyParser = require('body-parser')
const fetch      = require('node-fetch')

const app = express()
const port = process.env.PORT || 5001
/* 
const APIsPath = require('./config/APIsPath') */

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const getNews = (url) => {
  return fetch(url)
  .then((response) => {
    return response.json()
  })
}

app.get('/api/movie', (req, res) => {
  /* getNews(APIsPath.newsapi+'4439d864e3be4b7bb4499e2711865f02')
  .then(function(response) {
    res.send({ data: response })
  })
  .catch(function(error) {
    throw `An error has occured ${ error }`
  }) */

  res.send({ data: 'movie' })
})

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../../webpack/dist'))

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'webpack', 'dist','index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))
