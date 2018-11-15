"use strict";
//name the cache, to set diff versions if needed
const oriCacheName = 'restr-v23';
//define array of files that needs/wants to cache
const cacheFiles = [
  '/',
  '/restaurant.html',
  '/index.html',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/register_sw.js',
  '/css/styles.css',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png'
];


//service worker registered and ready to install events 
self.addEventListener('install', event => {
	// console.log("[ServiceWorker] Installed");
	//waitUntil() means that the install event has to wait until the promise within scope is resolved
	event.waitUntil (
		caches.open(oriCacheName).then(cache => {
			// console.log("[ServiceWorker] caching cacheFiles");
			return cache.addAll(cacheFiles);
		})
	);
});

//set up eventlistener to get any request, clone it and cache it
//this way, when we go offline, the clone request is stored in the cache and no longer needs to fetch
self.addEventListener('fetch', event => {
	// console.log("[ServiceWorker] Fetching", event.request.url);
	//respondWith() uses existing caches
  event.respondWith(
  	//.match check if we have the request already in our cache
    caches.match(event.request, {ignoreSearch: true}).then(response => {
    //if exist, use that
    //if works
      if (response) {
      	// console.log("[ServiceWorker] found in cache", event.request.url);
        return response;
      }
      	//if not, fetch it
        return fetch(event.request).then(response => {
        //after fetch, add it to the oriCacheName
        return caches.open(oriCacheName).then(cache => {
        	//then clone it
			//once we clone it, we can now use the event.request from our cache intead of fetching it again
          cache.put(event.request, response.clone());
          return response;
        });
      //if it doesn't work
      }).catch(err => {
        // console.log("[ServiceWorker] found in cache", event.request.url);
      });
    })
  );
});


//activate helps delete any old cache and cache all wanted assests
self.addEventListener('activate', event => {
	// console.log("[ServiceWorker] Activated");
	//waitUntil() waits until the promise get resolved
	event.waitUntil (
		//get all cache names
		caches.keys().then(cacheNames => {
			//and looping it through all the caches
			return Promise.all(
				cacheNames.map(thisCacheName => {
					//if any cache that doesn't match the oriCacheName, it'll delete the extra caches
					if (thisCacheName !== oriCacheName) {
						// console.log("[ServiceWorker] removing cacheFiles from", thisCacheName);
						return caches.delete(thisCacheName);
				}
			}))
		})
	);
});
