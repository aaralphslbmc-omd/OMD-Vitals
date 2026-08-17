/* OMD Vitals service worker.
   Intentionally minimal: it exists so the app can be installed to a phone
   home screen. It does NOT cache pages, so you never get a stale version
   and the sign-in flow always talks to the live server. */

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  /* Do nothing special — let the browser fetch from the network as usual.
     A fetch listener is required for the install prompt to appear. */
});
