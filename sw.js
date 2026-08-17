const CACHE_NAME = 'pokevault-v15';

const APP_FILES = [
  './',
  './Pokemon_Card_Manager.html',
  './manifest.json',
  './sw.js'
];

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
  );

});


self.addEventListener('activate', event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))

      );

    }).then(() => {

      return self.clients.claim();

    })

  );

});


self.addEventListener('fetch', event => {

  const request = event.request;


  /*
   HTML 永远优先网络
   避免 GitHub Pages 使用旧版本
  */

  if (
    request.mode === 'navigate' ||
    request.url.endsWith('.html')
  ){

    event.respondWith(

      fetch(
        request,
        {
          cache:'no-store'
        }
      )

      .then(response => {

        const copy =
          response.clone();

        caches.open(
          CACHE_NAME
        ).then(cache => {

          cache.put(
            request,
            copy
          );

        });

        return response;

      })

      .catch(() => {

        return caches.match(
          request
        );

      })

    );

    return;

  }


  /*
   其他资源：
   网络优先
  */

  event.respondWith(

    fetch(request)

      .then(response => {

        const copy =
          response.clone();

        caches.open(
          CACHE_NAME
        ).then(cache => {

          cache.put(
            request,
            copy
          );

        });

        return response;

      })

      .catch(() =>
        caches.match(request)
      )

  );

});
