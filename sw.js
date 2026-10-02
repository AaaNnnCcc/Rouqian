// Change VERSION when publishing an updated app bundle.
const VERSION='rouqian-v1.0.2';
const PREFIX='rouqian:'+self.registration.scope;
const CACHE=PREFIX+VERSION;
const FILES=['./','./index.html','./style.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./GUIDE.html'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const req=event.request,url=new URL(req.url);if(req.method!=='GET'||url.origin!==location.origin||!url.href.startsWith(self.registration.scope))return;event.respondWith(fetch(req).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)));}return response;}).catch(async()=>{const cache=await caches.open(CACHE);return await cache.match(req)|| (req.mode==='navigate'?await cache.match('./index.html'):null)||Response.error();}));});
