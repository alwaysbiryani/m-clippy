/* Trace service worker — offline app shell.
   The app itself is a single HTML file that keeps all data in the browser
   (localStorage), so "offline" just means the shell + fonts must load without
   a network. We precache the shell and cache the Google Fonts responses the
   first time they're fetched. Bump CACHE on any shell change to roll clients. */
const CACHE = 'trace-v1';
const SHELL = [
  './',
  './index.html',
  './favicon.svg',
  './manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

  // Never cache Anthropic API calls — they must always hit the network.
  if (url.hostname === 'api.anthropic.com') return;

  // Fonts: cache-first (they're immutable and versioned by URL).
  if (isFont) {
    event.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(req).then(hit => hit || fetch(req).then(res => {
          if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
          return res;
        }).catch(() => hit))
      )
    );
    return;
  }

  // Same-origin shell: network-first so updates land, falling back to cache offline.
  if (url.origin === location.origin) {
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
  }
});
