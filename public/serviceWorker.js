// Nome do cache
const CACHE_NAME = 'movie-pwa-cache'

const urlsToCache = [
  "/",
  "index.html",
  "app.js",
  "https://api.themoviedb.org/3/movie/popular?api_key=e2c70d159f475c3cf6bd625fd21f2312&language=pt-BR&page=1",
  "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});