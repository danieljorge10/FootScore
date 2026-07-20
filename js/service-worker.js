// ==============================
// FOOTSCORE - SERVICE WORKER
// ==============================

const CACHE_NAME = "footscore-v1";

// Arquivos que serão armazenados em cache
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./js/api.js",
  "./manifest.json"
];

// Instalação do Service Worker
self.addEventListener("install", (event) => {
  console.log("Service Worker instalado.");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

// Ativação
self.addEventListener("activate", (event) => {
  console.log("Service Worker ativado.");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Busca dos arquivos
self.addEventListener("fetch", (event) => {

  event.respondWith(

    caches.match(event.request).then((response) => {

      // Se existir no cache, retorna
      if (response) {
        return response;
      }

      // Caso contrário, busca na internet
      return fetch(event.request);

    })

  );

});
