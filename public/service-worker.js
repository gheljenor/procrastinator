const CACHE_VERSION = "v2";

const CACHE_NAME = `procrastinator-cache-${ CACHE_VERSION }`;
const PREFIX = location.pathname.split("/").slice(0, -1).join("/") + "/";

const urlsToCache = [
    PREFIX,
    ...[
        "build/bundle.css",
        "build/bundle.js",
        "icon.svg",
        "icon-128.png",
        "icon-512.png",
    ].map(url => PREFIX + url),
];

self.addEventListener("install", function(event) {
    console.log(`Installing procrastinator ${ CACHE_VERSION }`);

    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        }),
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Cache hit - return response
            if (response) { return response; }
            return fetch(event.request);
        }),
    );
});
