// Nome do cache
const CACHE_NAME = 'movie-pwa-cache'

const urlsToCache = [
  "/",
  "index.html",
  "app.js",
  "https://api.themoviedb.org/3/movie/popular?api_key=e2c70d159f475c3cf6bd625fd21f2312&language=pt-BR&page=1"
]

// A primeira vez que o usuário inicia a PWA, 'install' é acionado.
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Abre um cache e armazena nossos arquivos em cache
        //console.log('[ServiceWorker] Caching cacheFiles')
        return cache.addAll(urlsToCache)
      })
  )
})

// Elimina caches antigos que não sejam os atuais.
self.addEventListener("activate", event => {
  //console.log('[ServiceWorker] Activated')
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          return caches.delete(key)
        }
      }))
    )
  )
})

// Quando a página da Web vai buscar arquivos,
// nós interceptamos esse pedido e servimos os arquivos correspondentes se tivemos
self.addEventListener('fetch', function (event) {
  //console.log('[ServiceWorker] Fetch', event.request.url)
  event.respondWith(
    caches
    .match(event.request)
    .then(function (response) {
      if (event.request.cache === 'only-if-cache') {
        event.request.mode = 'same-origin'
      }
      return response || fetch(event.request)
    })
  )
})