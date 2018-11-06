var staticCacheName = 'restaurant-reviews-app-v6';

// The install event listener opens the caches object 
// and then populates it with the list of resources that we want to cache.
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(staticCacheName)
        .then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/css/styles-medium-device.css',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/register-sw.js',
                '/js/restaurant_info.js',
                'data/restaurants.json',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
            ]);
        }).then(console.log('Cache is sucessful!'))
    );
});

/** At Service Worker Activation, Delete previous caches, if any */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => {
                    return cacheName.startsWith('restaurant') &&
                        cacheName != staticCacheName;
                }).map((cacheName) => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
