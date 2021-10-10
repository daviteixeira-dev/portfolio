var CACHE_NAME = 'my-site-cache-v1';

// Files to save in cache
var urlsToCache = [
  /* Add an array of files to precache for your app */
  './',
  './src/img/services-banner.webp',
  './src/img/main-banner.webp',
  './src/img/logo.png',
  './src/img/banner-cards/about-me.webp',
  './src/img/banner-cards/contact.webp',
  './src/img/banner-cards/services.webp',
  './src/img/banner-cards/projects.webp',
  './src/css/style.css',
  './src/img/banner-cards/studies.webp',
  './src/img/banner-cards/my-blog.webp',
  './src/js/scripts.js',
  './src/js/parallax.js'
];

//Adding `install` event listener
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
    )
});
  
self.addEventListener('activate', (event) => {
    const cacheWhiteList = ['pwa-task-manager'];
    event.waitUntil(caches.keys()
      .then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
        if (cacheWhiteList.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
      })))
    )
});
  
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.open(CACHE_NAME)
      .then((cache) => cache.match(event.request)
        .then((response) => response || fetch(event.request)
          .then((res) => {
            cache.put(event.request, res.clone());
            return res;
          })
        )
      )
    )
});