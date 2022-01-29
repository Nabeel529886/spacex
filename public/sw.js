let CACHE_NAME = "spacexv1"


let urlsToCache = [
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    '/',
    'https://spacexdata.herokuapp.com/graphql',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.png',
]

self.addEventListener("activate", (e) => {
    console.log("service worker activated")
})

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request)
        .then((response) => {
            if (response){
                return response
            }
            return fetch(e.request)
        })
    )
})