/*
 * Service Worker for Cache‑Radar.
 * This service worker caches essential assets during installation
 * and serves cached assets when available during fetch requests.
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cache-radar-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './manifest.webmanifest'
        // Icons could be cached here once added
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
