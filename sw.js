const CACHE_NAME = "medest-v17";
const ASSETS = [
  "/",
  "/index.html",
  "/styles.css?v=17",
  "/app.js?v=17",
  "/manifest.webmanifest",
  "/icons/med-eis-logo-final.png",
  "/icons/med-eis-icon-final-192.png",
  "/icons/med-eis-icon-final-512.png",
  "/qr-codes/botoks-sonrasi.png",
  "/qr-codes/dolgu-sonrasi.png",
  "/qr-codes/cilt-enjeksiyonlari-sonrasi.png",
  "/qr-codes/cilt-yenileme-sonrasi.png",
  "/qr-codes/peeling-cilt-bakimi-sonrasi.png",
  "/qr-codes/lazer-islemi-sonrasi.png",
  "/qr-codes/vucut-sekillendirme-sonrasi.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
