const CACHE_NAME = 'face-attendance-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon.png'
];

// تثبيت التخزين المؤقت
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// جلب الملفات عند انقطاع الاتصال أو التشغيل
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

