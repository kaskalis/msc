self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/msc/ServiceWorkers/to-do.html',
                '/msc/ServiceWorkers/to-do.css',
                '/msc/ServiceWorkers/to-do.js',
                '/msc/ServiceWorkers/assets/close.svg',
                '/msc/ServiceWorkers/assets/complete.svg',
                '/msc/ServiceWorkers/assets/delete.svg',
                '/msc/ServiceWorkers/assets/downArrow.svg',
                '/msc/ServiceWorkers/assets/edit.svg',
                '/msc/ServiceWorkers/assets/logo.svg',
                '/msc/ServiceWorkers/assets/reactivate.svg',
                '/msc/ServiceWorkers/assets/SourceSansPro.ttf',
                '/msc/ServiceWorkers/assets/upArrow.svg'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith( caches.match(event.request) );
});