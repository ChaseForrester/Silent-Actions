var BUILD = "sa-video-1";

self.addEventListener("install", function () {
    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    event.waitUntil((async function () {
        var keys = await caches.keys();
        await Promise.all(keys.map(function (key) { return caches.delete(key); }));
        await self.clients.claim();
        var pages = await self.clients.matchAll({ type: "window" });
        pages.forEach(function (client) {
            client.postMessage({ type: "sa-takeover", build: BUILD });
        });
    })());
});

self.addEventListener("fetch", function (event) {
    var request = event.request;
    if (request.method !== "GET") return;
    var url = new URL(request.url);
    if (url.origin !== self.location.origin) return;
    var fresh = request.mode === "navigate"
        || request.destination === "document"
        || request.destination === "script"
        || request.destination === "style"
        || request.destination === "worker"
        || url.pathname === "/sw.js"
        || url.pathname === "/version.json"
        || /\.(html|js|css|json)$/.test(url.pathname)
        || url.pathname.endsWith("/");
    if (!fresh) return;
    event.respondWith(fetch(request, { cache: "no-store" }));
});
