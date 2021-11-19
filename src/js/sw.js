var myCacheName = 'daviteixeira-dev-cache-v1';

//Adding `install` event listener
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('myCacheName')
      .then((cache) => {
        return cache.addAll([
          './',
          './index.html',
          './src/js/sw.js',
          './src/img/logo.png',
          './pages/thanks.html',
          './src/css/style.css',
          './src/js/scripts.js',
          './src/js/manifest.json',
          './src/img/main-banner.webp',
          './src/img/services-banner.webp',
          './src/img/banner-cards/studies.webp',
          './src/img/banner-cards/my-blog.webp',
          './src/img/banner-cards/contact.webp',
          './src/img/banner-cards/about-me.webp',
          './src/img/banner-cards/services.webp',
          './src/img/banner-cards/projects.webp'
        ]);
      })
    );
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
  event.respondWith(caches.open(myCacheName)
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