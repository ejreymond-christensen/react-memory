"use strict";var precacheConfig=[["/react-memory/index.html","b9d06808e0a930810fa3c96f4422ada7"],["/react-memory/static/css/main.f701b5fc.css","5621cb2da12087305764350eca4c524f"],["/react-memory/static/js/main.cbb903e7.js","4a01b58f3deb18916ba80869d2f6ca7b"],["/react-memory/static/media/armistice.1d067722.jpeg","1d067722438ab74b114a885e32a76b13"],["/react-memory/static/media/bernard.7b45c759.jpeg","7b45c7597a97466af4cf371865f4740e"],["/react-memory/static/media/canyon.7e3b5243.jpg","7e3b52438bd4f6af7ca07cd269e972f6"],["/react-memory/static/media/clementine.bb6a6ebf.jpeg","bb6a6ebf830db8fac8b6c4a305e5c752"],["/react-memory/static/media/delores.76e8c0c3.jpeg","76e8c0c322752c48546d7dca494c26d2"],["/react-memory/static/media/elsie.b8e78921.jpeg","b8e78921a4ddc08b8081e53b2e2e2604"],["/react-memory/static/media/ford.c809127f.jpeg","c809127f77d7ac792d2e5a1fcc349dce"],["/react-memory/static/media/hector.9b538294.jpeg","9b53829462031f5403fb8ba6a60a48f7"],["/react-memory/static/media/logan.1037c66a.jpeg","1037c66ac9287eebaaa5730e12d13719"],["/react-memory/static/media/maeve.8765310b.jpeg","8765310b399673821da86589b2cfbd5c"],["/react-memory/static/media/mib.8737bb12.jpeg","8737bb12090e09b1d1302895b3346613"],["/react-memory/static/media/teddy.92fb4a9b.jpeg","92fb4a9b31d7062e2ad7c0c77c6fa347"],["/react-memory/static/media/theresa.1f9147c8.jpeg","1f9147c86e556d60a91ace316fdc2fa9"],["/react-memory/static/media/william.fc44ecc8.jpeg","fc44ecc82f427343eecb3a94010b88e3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var c="/react-memory/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});