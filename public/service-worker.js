console.log("Hello For Service Worker");
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-store').then((cache) => cache.addAll([
      '/',
      '/static/js/bundle.js'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
	console.log(e.request.url);
	e.respondWith(
		caches.match(e.request).then((response) => response || fetch(e.request)),
	);
});
  