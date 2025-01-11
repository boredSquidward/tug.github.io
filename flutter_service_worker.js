'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ffb768516ec04dc687e92b8a7466ad03",
"version.json": "aedf773dfaed7ceb5619dd9d3459e655",
"splash/img/light-2x.png": "bb7a8b5b6938be227a8128d7d649707d",
"splash/img/dark-4x.png": "0b9ff53ae9fe79b0b80467e57ec4a715",
"splash/img/light-3x.png": "da289d267877cfc9f584d21085a15a60",
"splash/img/dark-3x.png": "da289d267877cfc9f584d21085a15a60",
"splash/img/light-4x.png": "0b9ff53ae9fe79b0b80467e57ec4a715",
"splash/img/dark-2x.png": "bb7a8b5b6938be227a8128d7d649707d",
"splash/img/dark-1x.png": "aaa92ba2e80214d94014ec7c500c1d75",
"splash/img/light-1x.png": "aaa92ba2e80214d94014ec7c500c1d75",
"index.html": "094965c0723817f7491b5912144deacf",
"/": "094965c0723817f7491b5912144deacf",
"main.dart.js": "108bcf67ff0cc4e905234b78c623bf85",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bad795dae95711f557002f317f2fcf2f",
"assets/AssetManifest.json": "c3bb2d3aee0471ced78fe7c0c46da580",
"assets/NOTICES": "c2ca3536b2937568fd3658420e256d74",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6ff1d57f1f403844cb2faf15430d7e99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8f0fce5b7f944e2137459b8e08d88f76",
"assets/fonts/MaterialIcons-Regular.otf": "96803a1edef7c64234b1dfd5562c5d74",
"assets/assets/images/img-logo@3x.png": "61f76b3ff2d77fc6e713c7f3b6c513fc",
"assets/assets/images/ic-error.png": "5ad25c577dba2a41a9c93b20f374e79e",
"assets/assets/images/bg.png": "5ccbeda314e1785f17ba5705bb13cd5c",
"assets/assets/icons/ic-error.svg": "8bd91e7e19ac76c8fbb092a3dba1989e",
"assets/assets/icons/ic_checkin.svg": "db2ebc6a3e7aa6b3c05a465bd8c199e3",
"assets/assets/icons/ic-phone.svg": "65b55533bda4eab31d803fd458863e6c",
"assets/assets/icons/ic_x.svg": "9a26a63db1f1186b09fa47ec775bdeea",
"assets/assets/icons/ic-cam.svg": "1f6bfc19ee55a71d57b620aaaea350c6",
"assets/assets/icons/ic_language.svg": "1228235c8893443816512c165b6ad862",
"assets/assets/icons/ic_forgotpw.svg": "9d7eeb47c4ead922023479a407f1e679",
"assets/assets/icons/ic-key.svg": "17cb8f99b3b51fa562a79f42459f71be",
"assets/assets/icons/ic-warn.svg": "a998d6f3e65530b8fffca9cfc7e8ad7a",
"assets/assets/icons/waving-hand.svg": "f127da380a4e93d3b6d8cb13bc01e3bc",
"assets/assets/icons/ic_show.svg": "dfd315b97bba913e346172007dcb1bfb",
"assets/assets/icons/ic-ml-logo.svg": "717cc4fb5de5a2932f807d33b1a8343d",
"assets/assets/icons/ic_google.svg": "2700e83cc55b6a3fcf9ddb660bd073fa",
"assets/assets/icons/bg%252520card.svg": "124cb7db47c94dcfa09f874cb573280d",
"assets/assets/icons/ic-signout.svg": "956ff6beb8d2d6e64e247d8fa1843799",
"assets/assets/icons/ic-email.svg": "149871fb8c67b5e08d0c5614f7e38096",
"assets/assets/icons/ic-empty-general.svg": "93e5b1a81c930ee1a49d25a87ec28335",
"assets/assets/icons/ic_hide.svg": "69e46fc354b5206f2261a9cb7ea34e14",
"assets/assets/icons/ic-profile.svg": "1d16996474e6cec31471968e4793842a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
