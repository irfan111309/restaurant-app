const CACHE_NAME = "restaurant-billing-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./logo.png",
  "./qr.png",

  "./images/biriyani.jpg",
  "./images/chapati.jpg",
  "./images/chicken lollipop.jpg",
  "./images/coffee.jpg",
  "./images/dosa.jpg",
  "./images/egg parotta.jpg",
  "./images/friedrice.jpg",
  "./images/half boil.jpg",
  "./images/idiyappam.jpg",
  "./images/idli.jpg",
  "./images/meals.jpg",
  "./images/omblete.jpg",
  "./images/onion dosa.jpg",
  "./images/parotta.jpg",
  "./images/pepper chicken.jpg",
  "./images/poori.jpg",
  "./images/tea.jpg",
  "./images/vada sambar.jpg",
  "./images/chicken tandoori.jpg",
  "./images/logo.png",

];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
