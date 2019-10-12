var CACHE_NAME = 'movie-app'

var urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/favicon.ico',
    '/css?family=Open+Sans',
    '/icon?family=Material+Icons',
    'https://api.themoviedb.org/3/movie/popular?*'
]

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith (
    caches.match(event.request)
    .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      }
    )
  )
})